/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { withPrefix } from "gatsby";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiIcon,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
  EuiProgress,
  EuiFlexGroup,
  EuiFlexItem,
  useEuiTheme,
  EuiHorizontalRule,
} from "@elastic/eui";
import PanelSection from "./panel_section/panel_section";
import { GuidedSetupPanelStyles } from "./guided_setup_panel.styles";

import {
  GUIDE_SEARCH,
  GUIDE_OBSERVABILITY,
  GUIDE_SECURITY,
  GUIDE_MONITORING,
} from "./guided_setup_panel.data";

const GuidedSetupPanel = ({
  guideOpen,
  section,
  buttonDisabled,
  isSetupPage,
  confetti,
  stepNumber,
  currentProgress,
  completedSteps,
  onClick,
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupPanelStyles(euiTheme);
  const [stepCompleted, setStepCompleted] = useState(false);
  const [newProgress, setNewProgress] = useState(currentProgress);
  const [guideProgress, setGuideProgress] = useState(completedSteps);
  const [toggleStep, setToggleStep] = useState(stepNumber);

  const [guideComplete, setGuideComplete] = useState(false);

  const mountedStyle = { animation: "transitionIn 550ms ease-in" };

  //TBD - what data to set by default
  let data = GUIDE_OBSERVABILITY;

  if (section === "Search") {
    data = GUIDE_SEARCH;
  }

  if (section === "Observability") {
    data = GUIDE_OBSERVABILITY;
  }

  if (section === "Security") {
    data = GUIDE_SECURITY;
  }

  if (section === "Monitoring") {
    data = GUIDE_MONITORING;
  }

  useEffect(() => {
    if (confetti) {
      setTimeout(() => {
        setStepCompleted(true);
        setNewProgress(currentProgress + 25);
        setGuideProgress[`step-${stepNumber}`] = "done";

        //so whack, but setting a way to auto toggle to next step
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
            setGuideComplete(true);
          }, 500);
        }
      }, 2500);
    }
  }, [confetti, currentProgress]);

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
          Guided Setup{isSetupPage ? "" : `: Step ${stepNumber}`}
        </EuiButton>
      </div>
      {!!guideOpen && (
        <EuiFlyout
          ownFocus
          onClose={onClick}
          aria-labelledby="onboarding-guide"
          // style={{ height: guideComplete ? '745px' : 'auto' }}
        >
          <>
            <EuiFlyoutHeader>
              <EuiSpacer size="m" />
              <a href="#" onClick={onClick}>
                <EuiIcon type="arrowLeft" size="m" />
                Back to guides
              </a>
              <EuiSpacer size="m" />
              <EuiTitle size="m">
                <h2 css={guideComplete && mountedStyle}>
                  {guideComplete ? "Well done!" : data.title}
                </h2>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiHorizontalRule margin="s" />
            </EuiFlyoutHeader>

            <EuiFlyoutBody>
              {data.media && (
                <div css={styles.media}>
                  {guideComplete ? (
                    <img
                      src={withPrefix("/images/guide_complete_image.png")}
                      alt="Well Done!"
                      css={guideComplete && mountedStyle}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: data.media }} />
                  )}
                  <EuiSpacer size="m" />
                </div>
              )}
              <EuiText size="m">
                {guideComplete ? (
                  <p css={guideComplete && mountedStyle}>
                    You’ve completed the Observability Infrastructure Guide.
                    Feel free to come back to the Guides for more onboarding
                    help or a refresher anytime you’d like.
                  </p>
                ) : (
                  <p>{data.intro}</p>
                )}
              </EuiText>
              {data.link && !guideComplete && (
                <>
                  <EuiSpacer size="s" />
                  <EuiButtonEmpty
                    iconType="popout"
                    iconSide="right"
                    href={data.link.url}
                    style={{ marginLeft: "-8px" }}
                  >
                    {data.link.title}
                  </EuiButtonEmpty>
                </>
              )}
              <EuiHorizontalRule />
              {!isSetupPage && (
                <>
                  <EuiProgress
                    valueText={`${newProgress}%`}
                    value={newProgress}
                    max={100}
                    size="l"
                    label="Progress"
                  />
                  <EuiSpacer size="xxl" />
                </>
              )}
              {data.steps.map((step) => (
                <PanelSection
                  key={step.order}
                  step={step}
                  confetti={confetti}
                  stepCompleted={stepCompleted}
                  isSetupPage={isSetupPage}
                  stepNumber={stepNumber}
                  section={section}
                  completedSteps={completedSteps}
                  forceState={
                    toggleStep === step.order
                      ? "open"
                      : "" ||
                        (isSetupPage && stepNumber === 1) ||
                        (toggleStep - 1 === step.order && "closed")
                  }
                  guideProgress={guideProgress}
                />
              ))}
              {guideComplete && (
                <EuiFlexGroup gutterSize="m" justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButton color="text" onClick={onClick}>
                      Done
                    </EuiButton>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButton href="/8.6/guided-setup" fill>
                      Start a New Guide
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
            </EuiFlyoutBody>
            <EuiFlyoutFooter>
              <EuiText color="subdued" textAlign="center">
                Got questions? We’re here to help -{" "}
                <a href="#" style={{ fontWeight: "400" }}>
                  contact us
                </a>
                .
              </EuiText>
            </EuiFlyoutFooter>
          </>
        </EuiFlyout>
      )}
    </>
  );
};

export default GuidedSetupPanel;
