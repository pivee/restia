/* eslint-disable @typescript-eslint/no-empty-interface */

export type DataResponse<T> = {
  data: T;
};

export interface TextResponse extends DataResponse<string> {}
