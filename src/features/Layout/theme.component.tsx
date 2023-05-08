import type { ReactElement } from 'react';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import type { Theme, ThemeMode} from './fabrics/theme';
import { themeDark, themeLight } from './fabrics/theme';

import { GlobalStyle } from '@pages/_global-styles';

export interface IThemeProviderProps {
  readonly theme: ThemeMode;
  readonly children?: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: IThemeProviderProps): ReactElement => {
  const themes: { readonly [K in ThemeMode]: Theme } = {
    dark: { name: 'dark', ...themeLight },
    light: { name: 'light', ...themeDark },
  };

  return (
    <StyledThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
