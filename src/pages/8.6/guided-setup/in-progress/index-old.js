/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import {
  EuiSpacer,
  EuiButton,
  EuiTitle,
  EuiText,
  EuiCard,
  EuiFlexItem,
  EuiPanel,
  EuiProgress,
  EuiButtonEmpty,
  EuiFlexGrid,
  EuiHorizontalRule,
} from '@elastic/eui';
import KibanaLayout from '../../../../layouts/kibana';
import { GUIDE_DATA } from '../../../../constants/guided-setup.data';
import { navigate, withPrefix } from 'gatsby';

const GuidedSetup = () => {
  const { euiTheme } = useEuiTheme();
  const footer = css`
    span.euiProgress__label {
      flex-grow: 0;
      margin-bottom: 5px;
    }

    span.euiProgress__valueText {
      color: ${euiTheme.colors.darkShade};
    }
  `;

  const [guideOpen, setGuide] = useState(false);
  const [section, setSection] = useState('Observability');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const BREADCRUMBS = [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Setup guide',
    },
  ];

  let COMPLETED_STEPS = {};

  if (section === 'Search') {
    COMPLETED_STEPS = {};
  }

  if (section === 'Observe') {
    COMPLETED_STEPS = {
      'step-1': 'done',
      'step-2': 'done',
    };
  }

  if (section === 'Security') {
    COMPLETED_STEPS = {
      'step-1': 'done',
      'step-2': 'done',
      'step-3': 'done',
      'step-4': 'done',
    };
  }

  const handleGuideClick = (section) => {
    setGuide(!guideOpen);
    setButtonDisabled(!buttonDisabled);
    if (section) {
      setSection(section);
    }
  };

  return (
    <KibanaLayout
      template="empty"
      breadcrumbs={BREADCRUMBS}
      guideOpen={guideOpen}
      section={section}
      buttonDisabled={buttonDisabled}
      onClick={() => handleGuideClick(section)}
      completedSteps={COMPLETED_STEPS}
      newUserStartPage={false}
    >
      <EuiSpacer size="xxl" />
      <EuiPanel paddingSize="l">
        <div
          css={css`
            padding: 10px 10px 0;
          `}
        >
          <EuiTitle size="l" className="eui-textCenter">
            <h1>What would you like to do&nbsp;first?</h1>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="text" size="m" textAlign="center">
            <p>Select a guide to help you make the most of your data.</p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiSpacer size="xxl" />
          <EuiFlexGrid columns={4} gutterSize="l">
            {GUIDE_DATA.map((guide, index) => (
              <EuiFlexItem key={index}>
                <EuiCard
                  display="subdued"
                  image={withPrefix(`/images/${guide.cardImage}`)}
                  onClick={
                    guide.cardTitle !== 'Observe my data'
                      ? () => handleGuideClick(guide.section)
                      : () => navigate('../pages/integrations')
                  }
                  paddingSize="l"
                  textAlign="center"
                  title={guide.cardTitle}
                  description={guide.cardSummary}
                  betaBadgeProps={{
                    label: guide.section,
                  }}
                  footer={
                    <div css={footer}>
                      {guide.startPageProgress && (
                        <>
                          <EuiProgress
                            valueText={`${guide.startPageSteps}/4 steps`}
                            value={guide.startPageSteps}
                            max={4}
                            size="s"
                            label={
                              guide.startPageSteps === 4
                                ? 'Completed'
                                : 'In progress'
                            }
                          />
                          <EuiSpacer size="l" />
                        </>
                      )}
                      {guide.section === 'Search' && (
                        <EuiButton fill>View Guide</EuiButton>
                      )}
                      {guide.section === 'Observe' && !guide.static && (
                        <EuiButton fill>Continue</EuiButton>
                      )}
                      {guide.static && (
                        <EuiButton fill>View integrations</EuiButton>
                      )}
                      {guide.section === 'Security' && !guide.static && (
                        <EuiButtonEmpty fill></EuiButtonEmpty> //dummy element justis just to align visually
                      )}
                    </div>
                  }
                  titleSize="xs"
                />
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
          <EuiHorizontalRule margin="xl" />
          <EuiText size="s" textAlign="center">
            <EuiButtonEmpty
              iconSide="right"
              onClick={() => navigate('../../kibana')}
            >
              I'd like to do something else (skip)
            </EuiButtonEmpty>
          </EuiText>
        </div>
      </EuiPanel>
    </KibanaLayout>
  );
};

export default GuidedSetup;
