import IMeasurementSource from "../Interfaces/IMeasurementSource";
import IMeasurementResult from "../Interfaces/IMeasurementResult";
import BaseMeasurement from "./BaseMeasurement";

export default class WindowsLoadMeasurement extends BaseMeasurement {
  static measures(source: IMeasurementSource): IMeasurementResult {
    // eğer işlem load eventi ile tetiklenirse loadEventEnd haliyle boş gelecektir.
    // çözüm için "performance.now" kullanıyoruz. bu sayede tam olmasada yaklaşık değeri buluyoruz.
    return {
      time: (
        source.navigationTiming.loadEventEnd > 0
          ? source.navigationTiming.loadEventEnd
          : source.performance.now()
      ) - source.navigationTiming.loadEventStart,
    }
  }
}