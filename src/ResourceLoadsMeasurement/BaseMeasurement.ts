import IMeasurementSource from "../Interfaces/IMeasurementSource";
import IMeasurementResult from "../Interfaces/IMeasurementResult";
import IResourceLoadMeasurementResult from "../Interfaces/IResourceLoadMeasurementResult";

export default abstract class BaseMeasurement {
  static measures(source: IMeasurementSource): IMeasurementResult | IResourceLoadMeasurementResult[] {
    return null as IMeasurementResult;
  };
}