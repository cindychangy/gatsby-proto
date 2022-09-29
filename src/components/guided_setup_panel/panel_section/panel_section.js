/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';
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
  newUserStartPage,
  stepNumber,
  stepComplete,
  completedSteps,
  section,
  forceState,
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupPanelStyles(euiTheme);

  const currentStep = stepNumber === step.order;
  const nowFinished = completedSteps[`step-${step.order}`] === 'done';

  useEffect(() => {
    if (stepNumber !== 1) {
      setTimeout(() => {
        document
          .getElementById('currentStep')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 10);
    }
  }, []);

  const accordionStyles = [
    styles.step,
    newUserStartPage && step.order === 1 && styles.stepOutline,
    currentStep && styles.stepOutline,
    forceState && styles.stepOutline,
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
                      css={css`
                        font-weight: ${euiTheme.font.weight.medium};
                        lineheight: 1.4;
                      `}
                    >
                      {step.order}
                    </EuiText>
                  )}
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText
                    css={css`
                      font-weight: ${euiTheme.font.weight.semiBold};
                    `}
                  >
                    {step.title}
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            }
            paddingSize="none"
            initialIsOpen={
              (newUserStartPage && step.order === 1) ||
              (newUserStartPage === false &&
                section === 'Search' &&
                step.order === 1) ||
              (newUserStartPage === false &&
                section === 'Observe' &&
                step.order === 3)
            }
          >
            <EuiPanel
              paddingSize="none"
              css={confetti && currentStep && !stepComplete && styles.confetti}
            >
              <EuiSpacer size="s" />
              <EuiText
                size="s"
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
              {(!newUserStartPage && !currentStep) ||
              (newUserStartPage && step.order === 1) ? (
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
              ) : null}
            </EuiPanel>
          </EuiAccordion>
          <EuiHorizontalRule margin="l" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default PanelSection;
