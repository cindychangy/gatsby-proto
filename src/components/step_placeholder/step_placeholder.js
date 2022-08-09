/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState } from 'react';
import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiImage,
  EuiPageTemplate,
  EuiLoadingContent,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiTourStep,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana/kibana';;
import SearchSidebar from '../sidebar/sidebar_search';

const StepPlaceholder = ({
  title,
  breadcrumbs,
  stepNumber,
  section,
  currentProgress,
  completedSteps,
  hasSidebar,
  hasTour,
}) => {
  const [guideOpen, setGuide] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [isTourStep, setIsTourStep] = useState(0);

  const handleGuideClick = () => {
    setGuide(!guideOpen);
  };

  const handleCompleteStep = () => {
    setGuide(true);
    setConfetti(true);
  };

  const handleTourClick = () => {
    setIsTourStep(isTourStep + 1);
    setGuide(true);
    setConfetti(true);
  };

  //Search Tour
  const TourStep = ({
    anchorClass,
    buttonText,
    content,
    image,
    position,
    title,
    key,
  }) => (
    <EuiTourStep
      anchor={() => document.getElementsByClassName(anchorClass)[0]}
      anchorPosition={position}
      content={
        <>
          <EuiText color="subdue" grow={false} size="xs">
            <p>{content}</p>
          </EuiText>
          {image && (
            <>
              <EuiSpacer size="m" />
              <EuiImage alt="placeholder gif" src={image} width="fullWidth" />
            </>
          )}
        </>
      }
      css={css`
        max-width: 350px !important;
      `}
      footerAction={
        key === 0 ? (
          <EuiButtonEmpty
            color="text"
            flush="both"
            onClick={() => setIsTourStep(isTourStep + 99)}
            size="xs"></EuiButtonEmpty>
        ) : (
          <EuiFlexGroup alignItems="center" gutterSize="m">
            <EuiFlexItem>
              {/* <EuiButtonEmpty
                color="text"
                flush="both"
                onClick={() => setIsTourStep(isTourStep + 99)}
                size="xs">
                End Tour
              </EuiButtonEmpty> */}
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiButton
                color="success"
                onClick={
                  isTourStep === 0
                    ? () => setIsTourStep(isTourStep + 1)
                    : handleTourClick
                }
                size="s">
                {buttonText}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )
      }
      isStepOpen={true}
      offset={16}
      step={isTourStep + 1}
      stepsTotal={2}
      title={title}
    />
  );

  return (
    <>
      {hasTour && isTourStep === 0 && (
        <TourStep
          anchorClass="search-tour-1"
          buttonText="Next"
          content="Reprehenderit aute laborum ea amet proident voluptate minim do cillum anim."
          position="rightUp"
          title="Welcome to Elastic Enterprise Search"
          key={0}
        />
      )}
      {isTourStep === 1 && (
        <TourStep
          anchorClass="search-tour-5"
          buttonText="End Tour"
          content="Reprehenderit aute laborum ea amet proident voluptate minim do cillum anim."
          image="../../../images/tour-obs-01.gif"
          position="rightUp"
          title="Review your search engine analytics"
          key={1}
        />
      )}

      <KibanaLayout
        template="empty"
        guideOpen={guideOpen}
        confetti={confetti}
        breadcrumbs={breadcrumbs}
        onClick={handleGuideClick}
        section={section}
        hasSidebar={hasSidebar}
        currentProgress={currentProgress}
        stepNumber={stepNumber}
        completedSteps={completedSteps}>
        {hasSidebar ? (
          <EuiPageTemplate
            pageSideBar={<SearchSidebar stepNumber={stepNumber} />}>
            <EuiTitle size="l">
              <h1>{title}</h1>
            </EuiTitle>
            <EuiSpacer size="xl" />
            <EuiLoadingContent lines={10} />
            <EuiSpacer size="xxl" />
            {!hasTour && (
              <EuiButton onClick={handleCompleteStep} fill>
                Complete this step
              </EuiButton>
            )}
          </EuiPageTemplate>
        ) : null}
      </KibanaLayout>
    </>
  );
};

export default StepPlaceholder;
