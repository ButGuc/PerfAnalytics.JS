import IMeasurementSource from "../Interfaces/IMeasurementSource";
import IMeasurementResult from "../Interfaces/IMeasurementResult";
import BaseMeasurement from "./BaseMeasurement";

export default class DomLoadMeasurement extends BaseMeasurement {
  static measures(source: IMeasurementSource): IMeasurementResult {
    return {
      time: source.navigationTiming.domContentLoadedEventEnd - source.navigationTiming.domContentLoadedEventStart,
    }
  }
}