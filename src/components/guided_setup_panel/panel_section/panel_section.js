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
  stepCompleted,
  isSetupPage,
  stepNumber,
  section,
  completedSteps,
  forceState,
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupPanelStyles(euiTheme);

  const currentStep = stepNumber === step.order;
  const finishedStep = completedSteps[`step-${step.order}`] === 'done';

  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById('currentStep')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }, []);

  const numberStyles = [
    styles.number,
    isSetupPage && step.order === 1 && styles.numberOutline,
    currentStep && styles.numberOutline,
    forceState && styles.numberOutline,
    stepCompleted && currentStep && styles.numberDone,
    finishedStep && styles.numberDone,
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
            forceState={forceState}
            buttonContent={
              <EuiFlexGroup gutterSize="none" responsive={false}>
                <EuiFlexItem grow={false}>
                  <div css={numberStyles}>
                    {(stepCompleted && currentStep) || finishedStep ? (
                      <EuiIcon type="check" size="m" color="white" />
                    ) : (
                      <EuiText
                        size="s"
                        style={{ fontWeight: 500, lineHeight: 1.4 }}
                      >
                        {step.order}
                      </EuiText>
                    )}
                  </div>
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
              css={confetti && currentStep && !stepCompleted && styles.confetti}
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
              finishedStep ? null : (
                <EuiFlexGroup justifyContent="flexEnd" gutterSize="none">
                  <EuiFlexItem grow={false}>
                    <EuiSpacer size="m" />
                    <EuiButton
                      fill
                      onClick={() =>
                        section === 'Search'
                          ? navigate(
                              `/8.6/guided-setup/search/${step.stepPath}`
                            )
                          : navigate('#')
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
