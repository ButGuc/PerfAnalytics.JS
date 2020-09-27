import IMeasurementSource from "../Interfaces/IMeasurementSource";
import IMeasurementResult from "../Interfaces/IMeasurementResult";
import BaseMeasurement from "./BaseMeasurement";
import IResourceLoadMeasurementResult from "../Interfaces/IResourceLoadMeasurementResult";

export default class ResourceLoadsMeasurement extends BaseMeasurement {
  static measures(source: IMeasurementSource): IResourceLoadMeasurementResult[] {
    return [
      {
        url: source.navigationTiming.name,
        time: source.navigationTiming.responseEnd,
        type: 'document'
      },
      ...source.resourceTimings.map(item => {
        return {
          url: item.name,
          time: item.responseEnd - item.startTime,
          type: item.initiatorType,
        };
      })
    ];
  }
}