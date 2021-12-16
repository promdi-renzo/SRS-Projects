export * from "./user.interface";

export interface ErrorResponse {
  error?: boolean;
}

interface StandardResponse extends ErrorResponse {
  status: boolean;
  message: string;
  token?: string;
}

interface ResponseWithData<T extends unknown> extends StandardResponse {
  data: T[];
}

export type AsyncResponseData<T extends unknown> = Promise<ResponseWithData<T>>;
export type AsyncResponse = Promise<StandardResponse>;
