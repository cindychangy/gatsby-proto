/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { navigate, withPrefix } from 'gatsby';
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
  let data = GUIDE_DATA[1];

  const [newProgress, setNewProgress] = useState(stepNumber);
  const [toggleStep, setToggleStep] = useState(stepNumber);
  const [showEndState, setShowEndState] = useState(false);

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
        setNewProgress(stepNumber + 1);

        if (stepNumber === 1) {
          setToggleStep(2);
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
      }, 2500);
    }
  }, [confetti, newProgress, data, completedSteps]);

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
                      style={{ fontWeight: 400 }}
                    >
                      {data.link.title}
                    </EuiLink>
                  </EuiText>
                </>
              )}
              <EuiSpacer size="xs" />
              {!isSetupPage && (
                <>
                  <EuiSpacer size="l" />
                  <EuiProgress
                    valueText={`${newProgress - 1}/4 steps`}
                    value={newProgress - 1}
                    max={4}
                    size="l"
                    label="Progress"
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
                      Start using Elastic
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
            </EuiFlyoutBody>
            <EuiFlyoutFooter>
              <EuiFlexGroup direction="column" alignItems="center">
                <EuiButtonEmpty onClick={handleOptOut}>
                  Exit setup guide
                </EuiButtonEmpty>
                <EuiSpacer size="s" />
                <EuiText color="subdued" textAlign="center">
                  How’s onboarding? We’d love your {}
                  <a
                    href="https://www.elastic.co/kibana/feedback"
                    style={{ fontWeight: '400' }}
                  >
                    feedback.
                  </a>{' '}
                  <br />
                  Other questions? We’re {}
                  <a
                    href="https://www.elastic.co/kibana/feedback"
                    style={{ fontWeight: '400' }}
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
