export const Environments = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'prod',
  STAGING: 'uat',
} as const;

export const StatusTypes = {
  DONE: 'done',
  FAIL: 'fail',
  FETCHING: 'fetching',
  IDLE: 'idle',
} as const;

export const MediaQueries = {
  desktop: '(min-width: 768px)',
  phone: '(min-width: 576px)',
} as const;

export const AspectRatioTypes = {
  HD: '16/9',
  Square: '1/1',
  Standard: '4/3',
  UltraWide: '21/9',
} as const;

export const HttpErrorCodes = [200, 400, 500] as const;

export const ResponseCodes = {
  E1: { httpCode: 500, internalCode: 'E1', message: 'Server Error: Internal Server Error' },
  E2: { httpCode: 200, internalCode: 'E2', message: 'Server Error: No Data available' },
  E3: { httpCode: 200, internalCode: 'E3', message: 'Server Error: Slot is no longer available' },
  E4: { httpCode: 400, internalCode: 'E4', message: 'Server Error: Invalid fields' },
  E5: { httpCode: 200, internalCode: 'E5', message: 'Server Error: Fallback failed' },
  S1: { httpCode: 200, internalCode: 'S1', message: 'Server Success' },
  T1: { httpCode: 400, internalCode: 'T1', message: 'Server Error: No Token' },
  T2: { httpCode: 400, internalCode: 'T2', message: 'Server Error: Token Incorrect' },
} as const;
