import { css } from '@emotion/react';

export const kibanaLayoutStyles = euiTheme => ({
  mainWrapper: css`
    padding-top: 96px; // two top navs
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,

  contentWrapper: css`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    z-index: 0;
    position: relative;
  `,

  header: css`
    background: ${euiTheme.colors.body};
    padding: 45px 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-content: center;
    border-bottom: 2px solid ${euiTheme.colors.lightestShade};
  `,
});
