import getConfig from 'next/config';

import type { Environments } from './constants';

import type { Const } from '@customTypes/generics';

export interface IGetConfig {
  readonly serverRuntimeConfig: IServerRuntimeConfig;
  readonly publicRuntimeConfig: IPublicRuntimeConfig;
}

export interface IServerRuntimeConfig {
  readonly environment: Const<typeof Environments>;
  readonly contentful: {
    readonly space: string;
    readonly key: string;
    readonly environment: 'dev' | 'production' | 'uat';
  };
}

export interface IPublicRuntimeConfig {
  readonly baseUrl: string;
  readonly appUrl: string;
  readonly scripts: {
    readonly adobeLaunch: string;
  };
}

export const fetchConfig = (): IGetConfig => getConfig() as IGetConfig;
