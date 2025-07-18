//import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { createDarkTheme, createLightTheme } from '@fluentui/react-components';
import type { BrandVariants, Theme } from '@fluentui/react-components';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.tsx'

const shuAndBooksTheme: BrandVariants = { 
  10: "#020208",
  20: "#121431",
  30: "#1F1E53",
  40: "#2D276B",
  50: "#3F307F",
  60: "#523990",
  70: "#66449D",
  80: "#794FA8",
  90: "#8B5CB2",
  100: "#9D69BC",
  110: "#AE77C5",
  120: "#BE86CD",
  130: "#CD96D4",
  140: "#DAA7DC",
  150: "#E6B8E3",
  160: "#F0CBEA"
};

 const lightTheme: Theme = {
   ...createLightTheme(shuAndBooksTheme), 
};

 const darkTheme: Theme = {
   ...createDarkTheme(shuAndBooksTheme), 
};

darkTheme.colorBrandForeground1 = shuAndBooksTheme[110];
darkTheme.colorBrandForeground2 = shuAndBooksTheme[120];

const root = createRoot(document.getElementById('root')!);

root.render(
  <FluentProvider theme={lightTheme}>
    <App />
  </FluentProvider>,
);
/* The old version
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </StrictMode>,
)*/