import { css } from '@emotion/react';

/*
Styles here are split up into 2 parts.
1. Along with these there are also global style overrides located in the src/styles/global.css file

2. GuidedSetupPanelStyles at the bottom of the page are custom styles for this component.
*/

export const GuidedSetupPanelStyles = (euiTheme) => ({
  buttonContainer: css`
    margin: 0 20px;
  `,

  panelFooter: css`
    align-self: flex-end;
  `,

  media: css`
    width: 100%;

    img {
      width: 100%;
    }
  `,

  number: css`
    button.euiAccordion__button .euiText.euiText--small {
      border: 2px solid ${euiTheme.colors.lightShade};
      border-radius: 50%;
      height: 24px;
      width: 24px;
      margin-right: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,

  stepDefault: css`
    button.euiAccordion__button .euiText.euiText--small {
      border: 2px solid ${euiTheme.colors.success};
      border-radius: 50%;
      height: 24px;
      width: 24px;
      margin-right: 8px;
    }
  `,

  stepDone: css`
    svg.euiIcon.euiIcon--medium.euiIcon--customColor {
      background: ${euiTheme.colors.success};
      border: 2px solid ${euiTheme.colors.success};
      flex-wrap: nowrap;
      transition: 0.3s ease-in-out;
      border-radius: 50%;
      height: 24px;
      width: 24px;
      margin-right: 8px;
    }

    .euiText.euiText--medium {
      color: ${euiTheme.colors.title};
    }

    button.euiButtonIcon.euiButtonIcon--text.euiButtonIcon--empty.euiButtonIcon--xSmall.euiAccordion__iconButton.euiAccordion__iconButton--right {
      display: none;
    }
  `,

  confetti: css`
  background-repeat: repeat-x;
  background-position: top -10px center;
  background-image: url("data:image/svg+xml,%3Csvg width='600' height='90' viewBox='0 0 600 90' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='42' y='-10' width='6' height='10'/%3E%3Crect x='84' y='-10' width='6' height='10'/%3E%3Crect x='126' y='-13' width='5' height='13'/%3E%3Crect x='168' y='-13' width='5' height='13'/%3E%3Crect x='210' y='-10' width='6' height='10'/%3E%3Crect x='252' y='-13' width='5' height='13'/%3E%3Crect x='294' y='-10' width='6' height='10'/%3E%3Crect x='336' y='-13' width='5' height='13'/%3E%3Crect x='378' y='-13' width='5' height='13'/%3E%3Crect x='420' y='-10' width='6' height='10'/%3E%3Crect x='462' y='-10' width='6' height='10'/%3E%3Crect x='504' y='-13' width='5' height='13'/%3E%3Crect x='546' y='-10' width='6' height='10'/%3E%3Cstyle type='text/css'%3E rect %7B opacity: 0; %7D rect:nth-child(1) %7B transform-origin: 45px 5px; transform: rotate(-145deg); animation: blast 700ms infinite ease-out; animation-delay: 88ms; animation-duration: 631ms; %7D rect:nth-child(2) %7B transform-origin: 87px 5px; transform: rotate(164deg); animation: blast 700ms infinite ease-out; animation-delay: 131ms; animation-duration: 442ms; %7D rect:nth-child(3) %7B transform-origin: 128px 6px; transform: rotate(4deg); animation: blast 700ms infinite ease-out; animation-delay: 92ms; animation-duration: 662ms; %7D rect:nth-child(4) %7B transform-origin: 170px 6px; transform: rotate(-175deg); animation: blast 700ms infinite ease-out; animation-delay: 17ms; animation-duration: 593ms; %7D rect:nth-child(5) %7B transform-origin: 213px 5px; transform: rotate(-97deg); animation: blast 700ms infinite ease-out; animation-delay: 122ms; animation-duration: 476ms; %7D rect:nth-child(6) %7B transform-origin: 255px 6px; transform: rotate(57deg); animation: blast 700ms infinite ease-out; animation-delay: 271ms; animation-duration: 381ms; %7D rect:nth-child(7) %7B transform-origin: 297px 5px; transform: rotate(-46deg); animation: blast 700ms infinite ease-out; animation-delay: 131ms; animation-duration: 619ms; %7D rect:nth-child(8) %7B transform-origin: 338px 6px; transform: rotate(-65deg); animation: blast 700ms infinite ease-out; animation-delay: 85ms; animation-duration: 668ms; %7D rect:nth-child(9) %7B transform-origin: 380px 6px; transform: rotate(13deg); animation: blast 700ms infinite ease-out; animation-delay: 128ms; animation-duration: 377ms; %7D rect:nth-child(10) %7B transform-origin: 423px 5px; transform: rotate(176deg); animation: blast 700ms infinite ease-out; animation-delay: 311ms; animation-duration: 508ms; %7D rect:nth-child(11) %7B transform-origin: 465px 5px; transform: rotate(108deg); animation: blast 700ms infinite ease-out; animation-delay: 108ms; animation-duration: 595ms; %7D rect:nth-child(12) %7B transform-origin: 506px 6px; transform: rotate(62deg); animation: blast 700ms infinite ease-out; animation-delay: 105ms; animation-duration: 375ms; %7D rect:nth-child(13) %7B transform-origin: 549px 5px; transform: rotate(16deg); animation: blast 700ms infinite ease-out; animation-delay: 149ms; animation-duration: 491ms; %7D rect:nth-child(odd) %7B fill: %2365BB5C; %7D rect:nth-child(even) %7B z-index: 1; fill: %2333AAFF; %7D rect:nth-child(4n) %7B animation-duration: 1400ms; fill: %23F23B14; %7D rect:nth-child(3n) %7B animation-duration: 1750ms; animation-delay: 700ms; %7D rect:nth-child(4n-7) %7B fill: %232A2F6A; %7D rect:nth-child(6n) %7B fill: %23FBBA23; %7D @keyframes blast %7B from %7B opacity: 0; %7D 20%25 %7B opacity: 1; %7D to %7B transform: translateY(90px); %7D %7D %3C/style%3E%3C/svg%3E%0A");

  @media (prefers-reduced-motion) {
    background-image: url("data:image/svg+xml,%3Csvg width='574' height='60' viewBox='0 0 574 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.8' x='27.1224' y='20.0458' width='5' height='13' transform='rotate(-139 27.1224 20.0458)' fill='%23F23B14'/%3E%3Crect opacity='0.8' x='118.478' y='7.00201' width='5' height='13' transform='rotate(-38.8114 118.478 7.00201)' fill='%23FBBA23'/%3E%3Crect opacity='0.8' x='504.616' y='25.4479' width='5' height='13' transform='rotate(-60.2734 504.616 25.4479)' fill='%23F23B14'/%3E%3Crect opacity='0.6' x='538.983' y='45.555' width='5' height='13' transform='rotate(16.7826 538.983 45.555)' fill='%232A2F6A'/%3E%3Crect opacity='0.3' x='470.322' y='2.63625' width='5' height='13' transform='rotate(11.295 470.322 2.63625)' fill='%2333AAFF'/%3E%3Crect opacity='0.3' x='190.295' y='4.58138' width='5' height='13' transform='rotate(27.5954 190.295 4.58138)' fill='%23F23B14'/%3E%3Crect opacity='0.8' x='234.303' y='16.3233' width='5' height='13' transform='rotate(-41.8233 234.303 16.3233)' fill='%2365BB5C'/%3E%3Crect opacity='0.6' x='369.702' y='40.9875' width='5' height='13' transform='rotate(-56.419 369.702 40.9875)' fill='%2333AAFF'/%3E%3Crect opacity='0.3' x='402.121' y='31.0848' width='5' height='13' transform='rotate(-17.9234 402.121 31.0848)' fill='%23F23B14'/%3E%3Crect opacity='0.6' x='200.316' y='31.9328' width='5' height='13' transform='rotate(-15.8896 200.316 31.9328)' fill='%232A2F6A'/%3E%3Crect opacity='0.6' x='69.6745' y='23.4725' width='6' height='10' transform='rotate(70.0266 69.6745 23.4725)' fill='%2365BB5C'/%3E%3Crect opacity='0.6' x='291.945' y='7.16931' width='6' height='10' transform='rotate(30.4258 291.945 7.16931)' fill='%23FBBA23'/%3E%3Crect opacity='0.3' x='33.7754' y='38.2208' width='6' height='10' transform='rotate(38.6056 33.7754 38.2208)' fill='%23FBBA23'/%3E%3Crect opacity='0.8' x='109.752' y='31.1743' width='6' height='10' transform='rotate(28.5296 109.752 31.1743)' fill='%2333AAFF'/%3E%3Crect opacity='0.3' x='278.081' y='37.8695' width='6' height='10' transform='rotate(-26.5651 278.081 37.8695)' fill='%23F23B14'/%3E%3Crect opacity='0.8' x='416.294' y='11.5573' width='6' height='10' transform='rotate(-22.8498 416.294 11.5573)' fill='%23FBBA23'/%3E%3Crect opacity='0.3' x='354.667' y='9.32341' width='6' height='10' transform='rotate(17.7506 354.667 9.32341)' fill='%232A2F6A'/%3E%3Crect opacity='0.8' x='532.404' y='16.6372' width='6' height='10' transform='rotate(-75.3432 532.404 16.6372)' fill='%23FBBA23'/%3E%3Crect opacity='0.6' x='460.463' y='39.3557' width='6' height='10' transform='rotate(45.4982 460.463 39.3557)' fill='%2365BB5C'/%3E%3C/svg%3E");
  }
  }
`,
});
