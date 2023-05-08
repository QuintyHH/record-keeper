export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export type ThemeMode = typeof DARK_THEME | typeof LIGHT_THEME;

interface ThemeSelection {
  readonly colors: {
    readonly energyBlue: string;
    readonly shellRed: string;
    readonly fieldTransparent: string;
    readonly midGrey: string;
    readonly white: string;
    readonly shellYellow: string;
    readonly grey: string;
    readonly lightGrey: string;
    readonly cellGrey: string;
  };
}

export interface Theme extends ThemeSelection {
  readonly name: ThemeMode;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    readonly _toExtend?: string;
  }
}

export const themeLight: ThemeSelection = {
  colors: {
    cellGrey: '#D9D9D9',
    energyBlue: '#0097BB',
    fieldTransparent: 'rgba(0, 0, 0, 0.15)',
    grey: '#404040',
    lightGrey: '#F5F5F5',
    midGrey: '#757575',
    shellRed: '#DD1D21',
    shellYellow: '#FBCF09',
    white: '#FFFFFF',
  },
};

export const themeDark: ThemeSelection = {
  colors: {
    cellGrey: '#D9D9D9',
    energyBlue: '#0097BB',
    fieldTransparent: 'rgba(0, 0, 0, 0.15)',
    grey: '#404040',
    lightGrey: '#F5F5F5',
    midGrey: '#757575',
    shellRed: '#DD1D21',
    shellYellow: '#FBCF09',
    white: '#FFFFFF',
  },
};
