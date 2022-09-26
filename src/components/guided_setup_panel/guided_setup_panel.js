/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { navigate, withPrefix } from 'gatsby';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiIcon,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiLink,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
  EuiProgress,
  EuiFlexGroup,
  EuiFlexItem,
  useEuiTheme,
  EuiHorizontalRule,
} from '@elastic/eui';
import PanelSection from './panel_section/panel_section';
import { GuidedSetupPanelStyles } from './guided_setup_panel.styles';
import { GUIDE_DATA } from '../../pages/8.6/guided-setup/guided-setup.data';

const GuidedSetupPanel = ({
  guideOpen,
  section,
  buttonDisabled,
  isSetupPage,
  confetti,
  stepNumber,
  onClick,
  handleOptOut,
  completedSteps,
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupPanelStyles(euiTheme);

  const mountedStyle = { animation: 'transitionIn 850ms ease-in-out' };
  const [toggleStep, setToggleStep] = useState(stepNumber);
  const [showEndState, setShowEndState] = useState(false);
  const [showZeroState, setShowZeroState] = useState(0);

  let data = GUIDE_DATA[1];

  if (section === 'Search') {
    data = GUIDE_DATA[0];
  }

  if (section === 'Observe') {
    data = GUIDE_DATA[1];
  }

  if (section === 'Security') {
    data = GUIDE_DATA[3];
  }

  let endGuide = data.guideCompleted || showEndState;

  useEffect(() => {
    if (confetti) {
      setTimeout(() => {
        completedSteps[`step-${stepNumber}`] = 'done';

        if (stepNumber === 1) {
          setToggleStep(2);
          setTimeout(() => {
            setShowZeroState(1);
          }, 150);
        }

        if (stepNumber === 2) {
          setToggleStep(3);
        }

        if (stepNumber === 3) {
          setToggleStep(4);
        }

        if (stepNumber === 4) {
          setToggleStep(5);
          setTimeout(() => {
            setShowEndState(true);
          }, 0);
        }
      }, 1500);
    }
  }, [confetti, data, completedSteps]);

  return (
    <>
      <div css={styles.buttonContainer}>
        <EuiButton
          color="success"
          size="s"
          onClick={onClick}
          key="onboarding-setup-button"
          disabled={buttonDisabled}
          fill
        >
          Setup guide{isSetupPage ? '' : `: step ${stepNumber}`}
        </EuiButton>
      </div>
      {!!guideOpen && (
        <EuiFlyout
          ownFocus
          onClose={onClick}
          aria-labelledby="onboarding-guide"
          paddingSize="l"
        >
          <>
            <EuiFlyoutHeader>
              <EuiSpacer size="m" />
              <EuiLink
                href={withPrefix('/8.6/guided-setup')}
                onClick={onClick}
                color="text"
              >
                <EuiIcon type="arrowLeft" size="m" />
                Back to guides
              </EuiLink>
              <EuiSpacer size="m" />
              <EuiTitle size="m">
                <h2 css={endGuide && mountedStyle}>
                  {endGuide ? 'Well done!' : data.title}
                </h2>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiHorizontalRule margin="s" />
            </EuiFlyoutHeader>

            <EuiFlyoutBody>
              {data.media && (
                <div css={styles.media}>
                  {endGuide ? null : (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: data.media }} />
                      <EuiSpacer size="m" />
                    </>
                  )}
                </div>
              )}
              <EuiText size="m">
                {endGuide ? (
                  <p css={endGuide && mountedStyle}>
                    You’ve completed the Guide. Feel free to come back to the
                    Guides for more onboarding help or a refresher anytime you’d
                    like.
                  </p>
                ) : (
                  <p>{data.intro}</p>
                )}
              </EuiText>
              {data.link && !endGuide && (
                <>
                  <EuiSpacer size="m" />
                  <EuiText size="m">
                    <EuiLink
                      target="_blank"
                      href={data.link.url}
                      css={css`
                        font-weight: ${euiTheme.font.weight.regular};
                      `}
                    >
                      {data.link.title}
                    </EuiLink>
                  </EuiText>
                </>
              )}
              <EuiSpacer size="xs" />
              {Object.keys(completedSteps).length === 0 && confetti && (
                <>
                  <EuiSpacer size="l" />
                  <EuiProgress
                    valueText={`${Object.keys(completedSteps).length}/4 steps`}
                    value={
                      stepNumber === 1
                        ? showZeroState
                        : Object.keys(completedSteps).length
                    }
                    max={4}
                    size="l"
                    label={
                      Object.keys(completedSteps).length === 4
                        ? 'Completed'
                        : 'Progress'
                    }
                  />
                  <EuiSpacer size="s" />
                </>
              )}
              {Object.keys(completedSteps).length !== 0 && (
                <>
                  <EuiSpacer size="l" />
                  <EuiProgress
                    valueText={`${Object.keys(completedSteps).length}/4 steps`}
                    value={
                      stepNumber === 1
                        ? showZeroState
                        : Object.keys(completedSteps).length
                    }
                    max={4}
                    size="l"
                    label={
                      Object.keys(completedSteps).length === 4
                        ? 'Completed'
                        : 'Progress'
                    }
                  />
                  <EuiSpacer size="s" />
                </>
              )}
              <EuiHorizontalRule />
              {data.steps.map((step) => (
                <PanelSection
                  key={step.order}
                  step={step}
                  confetti={confetti}
                  isSetupPage={isSetupPage}
                  stepNumber={stepNumber}
                  section={section}
                  stepComplete={step.stepComplete}
                  completedSteps={completedSteps}
                  forceState={
                    toggleStep === step.order
                      ? 'open'
                      : '' ||
                        (toggleStep - 1 === step.order && 'closed') ||
                        (section === 'Observe' && step.order === 3 && 'open')
                  }
                />
              ))}
              {data.guideComplete && (
                <EuiFlexGroup gutterSize="m" justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButton onClick={() => navigate('/8.6/kibana')} fill>
                      Continue using Elastic
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
            </EuiFlyoutBody>
            <EuiFlyoutFooter>
              <EuiFlexGroup direction="column" alignItems="center">
                <EuiButtonEmpty onClick={handleOptOut}>
                  Quit setup guide
                </EuiButtonEmpty>
                <EuiSpacer size="s" />
                <EuiText color="subdued" textAlign="center">
                  How’s onboarding? We’d love your {}
                  <a
                    href="https://www.elastic.co/kibana/feedback"
                    css={css`
                      font-weight: ${euiTheme.font.weight.regular};
                    `}
                  >
                    feedback.
                  </a>{' '}
                  <br />
                  Other questions? We’re {}
                  <a
                    href="https://www.elastic.co/kibana/feedback"
                    css={css`
                      font-weight: ${euiTheme.font.weight.regular};
                    `}
                  >
                    here to help
                  </a>
                  .
                </EuiText>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
            </EuiFlyoutFooter>
          </>
        </EuiFlyout>
      )}
    </>
  );
};

export default GuidedSetupPanel;
