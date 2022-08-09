import { css } from '@emotion/react';

export const GuidedSetupStyles = euiTheme => ({
  container: css`
    padding: 10px 10px 0;
  `,
  icon: css`
    background: ${euiTheme.colors.lightestShade};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  `,
});
