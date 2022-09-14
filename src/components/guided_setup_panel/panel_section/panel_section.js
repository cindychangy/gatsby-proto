/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiText,
  EuiSpacer,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPanel,
  EuiIcon,
  useEuiTheme,
} from '@elastic/eui';
import { GuidedSetupPanelStyles } from '../guided_setup_panel.styles';

const PanelSection = ({
  step,
  confetti,
  isSetupPage,
  stepNumber,
  stepComplete,
  completedSteps,
  forceState,
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupPanelStyles(euiTheme);

  const currentStep = stepNumber === step.order;
  const nowFinished = completedSteps[`step-${step.order}`] === 'done';

  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById('currentStep')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }, []);

  const accordionStyles = [
    styles.number,
    isSetupPage && step.order === 1 && styles.stepDefault,
    currentStep && styles.stepDefault,
    forceState && styles.stepDefault,
    stepComplete && currentStep && styles.stepDone,
    nowFinished && styles.stepDone,
  ];

  return (
    <div id={currentStep && 'currentStep'}>
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        aria-label={`step-${step.order}`}
      >
        <EuiFlexItem grow={1}>
          <EuiAccordion
            id={`step-${step.order}`}
            arrowDisplay="right"
            forceState={forceState || (stepComplete && 'closed')}
            css={accordionStyles}
            buttonContent={
              <EuiFlexGroup gutterSize="none" responsive={false}>
                <EuiFlexItem grow={false}>
                  {(stepComplete && currentStep) ||
                  stepComplete ||
                  nowFinished ? (
                    <EuiIcon type="check" size="m" color="white" />
                  ) : (
                    <EuiText
                      size="s"
                      style={{ fontWeight: 500, lineHeight: 1.4 }}
                    >
                      {step.order}
                    </EuiText>
                  )}
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText style={{ fontWeight: 600 }}>{step.title}</EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            }
            paddingSize="none"
            initialIsOpen={isSetupPage && step.order === 1}
          >
            <EuiPanel
              paddingSize="none"
              css={confetti && currentStep && !stepComplete && styles.confetti}
            >
              <EuiSpacer size="s" />
              <EuiText
                size="s"
                style={{ color: '#1A1C21' }}
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
              {step.link && (
                <EuiButtonEmpty
                  iconType="popout"
                  iconSide="right"
                  iconSize="s"
                  href={step.link.url}
                >
                  <EuiText size="xs">{step.link.title}</EuiText>
                </EuiButtonEmpty>
              )}

              {(isSetupPage && step.order !== 1) ||
              (!isSetupPage && step.order === stepNumber) ||
              stepComplete ? null : (
                <EuiFlexGroup justifyContent="flexEnd" gutterSize="none">
                  <EuiFlexItem grow={false}>
                    <EuiSpacer size="m" />
                    <EuiButton
                      fill
                      onClick={() =>
                        navigate(`/8.6/guided-setup/${step.stepPath}`)
                      }
                    >
                      Start
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
            </EuiPanel>
          </EuiAccordion>
          <EuiHorizontalRule margin="l" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default PanelSection;
