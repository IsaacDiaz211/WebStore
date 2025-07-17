//import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!);

root.render(
  <FluentProvider theme={webLightTheme}>
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