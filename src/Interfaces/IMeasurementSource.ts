import IPerformancePaintTiming from "./IPerformancePaintTiming";

export default interface IMeasurementSource {
  readonly navigationTiming: PerformanceNavigationTiming;
  // TODO : PerformancePaintTiming desteklenmiyor, desteklendiği zaman güncellenecek.
  //  konu ile ilgili issue: https://github.com/microsoft/TypeScript/issues/33866
  readonly firstContentfulPaintTiming: IPerformancePaintTiming;
  readonly resourceTimings: PerformanceResourceTiming[];
  readonly performance: Performance;
}