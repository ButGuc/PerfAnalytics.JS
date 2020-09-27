import IResourceLoadMeasurementResult from "./IResourceLoadMeasurementResult";
import IMeasurementResult from "./IMeasurementResult";

export default interface IResultsOfAllMeasurements {
  timeToFirstByte: IMeasurementResult;
  firstContentfulPaint: IMeasurementResult;
  domLoad: IMeasurementResult;
  windowLoad: IMeasurementResult;
  resourceLoads: IResourceLoadMeasurementResult[];
}