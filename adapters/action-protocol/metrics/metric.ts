export interface Metric {
  metricsContentType: string;
  getMetrics: () => Promise<unknown>;
  finishTime?: (start: number) => number;
  startTime?: () => number;
  createCounterRequestTotalOperators?: () => void;
  sumOneRequest?: (action: string) => void;
  createHistogramRequestDuration?: () => void;
  calculeHistogramRequestDuration?: (start: number, action: string) => void;
}
