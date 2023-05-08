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
