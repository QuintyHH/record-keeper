import { NextApiRequest } from 'next';

export type Const<T extends Object> = T[keyof T];

export type Arr<N extends number, T extends unknown[] = []> = T['length'] extends N ? T : Arr<N, [...T, unknown]>;

export type Inc<N extends number> = [...Arr<N>, unknown]['length'];

export type Enumerate<N extends number, T extends readonly number[] = readonly []> = T['length'] extends N
  ? T[number]
  : Enumerate<N, readonly [...T, T['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type NextApiRequestWithPayload<T> = Override<NextApiRequest, { body: T }>;

export type Trim<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
