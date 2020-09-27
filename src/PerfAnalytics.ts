import IResultsOfAllMeasurements from "./Interfaces/IResultsOfAllMeasurements";
import IMeasurementSource from "./Interfaces/IMeasurementSource";
import MeasurementSource from "./MeasurementSource";
import TimeToFirstByteMeasurement from "./ResourceLoadsMeasurement/TimeToFirstByteMeasurement";
import FirstContentfulPaintMeasurement from "./ResourceLoadsMeasurement/FirstContentfulPaintMeasurement";
import WindowsLoadMeasurement from "./ResourceLoadsMeasurement/WindowsLoadMeasurement";
import DomLoadMeasurement from "./ResourceLoadsMeasurement/DomLoadMeasurement";
import ResourceLoadsMeasurement from "./ResourceLoadsMeasurement/ResourceLoadsMeasurement";
import IEnvironment from "./Interfaces/IEnvironment";

export default class PerfAnalytics {
  public static makeMeasurementsAndSend(environment: IEnvironment) {
    this.sendMeasurements(this.makeMeasurements(), environment);
  }

  private static makeMeasurements(): IResultsOfAllMeasurements {
    const measurementSource: IMeasurementSource = new MeasurementSource();

    return {
      firstContentfulPaint: FirstContentfulPaintMeasurement.measures(measurementSource),
      timeToFirstByte: TimeToFirstByteMeasurement.measures(measurementSource),
      windowLoad: WindowsLoadMeasurement.measures(measurementSource),
      domLoad: DomLoadMeasurement.measures(measurementSource),
      resourceLoads: ResourceLoadsMeasurement.measures(measurementSource),
    };
  }

  private static sendMeasurements(result: IResultsOfAllMeasurements, environment: IEnvironment):void {
    // HERE
    // TODO : API hazırlandığı zaman bağlantı yapılacak.

    console.log('result : ', result);
    console.log('environment: ', environment);
  }
}
