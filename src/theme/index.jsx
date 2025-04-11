import { useMemo } from 'react';
import merge from 'lodash/merge';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';


// system
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

// options
import RTL from './options/right-to-left';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
import { createPresets } from './options/presets';
import { createContrast } from './options/contrast';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {

  const presets = createPresets("default");

  const contrast = createContrast("default", "light");

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette("light"),
        ...presets.palette,
        ...contrast.palette,
      },
      customShadows: {
        ...customShadows("light"),
        ...presets.customShadows,
      },
      direction: "rtl",
      shadows: shadows("light"),
      shape: { borderRadius: 8 },
      typography,
    }),
    [
      presets.palette,
      presets.customShadows,
      contrast.palette,
    ]
  );

  const theme = createTheme(memoizedValue);

  theme.components = merge(componentsOverrides(theme), contrast.components);

  const themeWithLocale = useMemo(
    () => createTheme(theme),
    [theme]
  );

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <RTL themeDirection={"ltr"}>
        <CssBaseline />
        {children}
      </RTL>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
