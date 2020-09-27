import IMeasurementSource from "./Interfaces/IMeasurementSource";
import IPerformancePaintTiming from "./Interfaces/IPerformancePaintTiming";

export default class MeasurementSource implements IMeasurementSource {
  readonly firstContentfulPaintTiming: IPerformancePaintTiming;
  readonly navigationTiming: PerformanceNavigationTiming;
  readonly resourceTimings: PerformanceResourceTiming[];
  readonly performance: Performance;

  constructor() {
    this.firstContentfulPaintTiming = performance.getEntriesByName('first-contentful-paint')[0] as IPerformancePaintTiming;
    this.navigationTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    this.resourceTimings = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
    this.performance = performance;
  }
}
