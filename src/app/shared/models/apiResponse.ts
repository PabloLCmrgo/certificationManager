export interface ApiResponse<T = void, U = void> {
  status: ResponseStatus;
  message: string;
  result?: T;
  meta?: U;
}

export interface ResponseStatus {
  Success: 'Success',
  Unauthorized: 'Unauthorized',
  ValidationError: 'ValidationError',
  BizFailure: 'BizFailure',
  Failure: 'Failure'
}
