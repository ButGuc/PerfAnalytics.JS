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
    const source: IMeasurementSource = new MeasurementSource();

    return {
      firstContentfulPaint: FirstContentfulPaintMeasurement.measures(source),
      timeToFirstByte: TimeToFirstByteMeasurement.measures(source),
      windowLoad: WindowsLoadMeasurement.measures(source),
      domLoad: DomLoadMeasurement.measures(source),
      resourceLoads: ResourceLoadsMeasurement.measures(source),
    };
  }

  private static async sendMeasurements(result: IResultsOfAllMeasurements, environment: IEnvironment):Promise<void> {
    await fetch(`http://${environment.host}:${environment.port}/measurements`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin,
        url: document.URL,
        domLoad: result.domLoad.time,
        windowLoad: result.windowLoad.time,
        firstContentfulPaint: result.firstContentfulPaint.time,
        timeToFirstByte: result.timeToFirstByte.time,
        resourceLoads: result.resourceLoads
      })
    });
  }
}
