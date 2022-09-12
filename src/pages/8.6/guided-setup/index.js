/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import {
  EuiSpacer,
  EuiButton,
  EuiTitle,
  EuiText,
  EuiLink,
  EuiCard,
  EuiFlexItem,
  EuiPanel,
  EuiProgress,
  EuiButtonEmpty,
  EuiFlexGrid,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana/kibana';
import { GuidedSetupStyles } from './guided-setup.styles';
import { CARD_DATA } from './guided-setup.data';
import { navigate, withPrefix } from 'gatsby';

const GuidedSetup = () => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupStyles(euiTheme);
  const [guideOpen, setGuide] = useState(false);
  const [section, setSection] = useState('Observability');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isSetupPage, setIsSetupPage] = useState(true);

  const BREADCRUMBS = [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Guided setup',
    },
  ];

  const COMPLETED_STEPS = {
    'step-1': '',
    'step-2': '',
    'step-3': '',
    'step-4': '',
    'step-5': '',
    'step-6': '',
  };

  const handleGuideClick = (section) => {
    setGuide(!guideOpen);
    setButtonDisabled(!buttonDisabled);
    if (section) {
      setSection(section);
      setIsSetupPage(true);
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
      isSetupPage={isSetupPage}
    >
      <EuiSpacer size="xxl" />
      <EuiPanel paddingSize="l">
        <div css={styles.container}>
          <EuiTitle size="l" className="eui-textCenter">
            <h1>What would you like to do&nbsp;first?</h1>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued" size="m" textAlign="center">
            <p>Select a guide to help you make the most of your data.</p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiSpacer size="xxl" />
          <EuiFlexGrid columns={4} gutterSize="l">
            {CARD_DATA.map((card, index) => (
              <EuiFlexItem key={index}>
                <EuiCard
                  display="subdued"
                  image={withPrefix(`/images/${card.image}`)}
                  onClick={
                    card.title !== 'Observe my data'
                      ? () => handleGuideClick(card.section)
                      : () => navigate('pages/integrations')
                  }
                  paddingSize="l"
                  textAlign="center"
                  title={card.title}
                  description={card.description}
                  betaBadgeProps={{
                    label: card.section,
                  }}
                  footer={
                    <div css={styles.footer}>
                      {card.started && (
                        <>
                          <EuiProgress
                            valueText={`${card.progress}/4 steps`}
                            value={card.progress}
                            max={4}
                            size="s"
                            label={
                              card.progress === 4 ? 'Completed' : 'In progress'
                            }
                          />
                          <EuiSpacer size="l" />
                        </>
                      )}
                      {card.progress !== 4 && card.progress !== undefined && (
                        <EuiButton fill>Continue</EuiButton>
                      )}
                      {card.progress === 4 && card.progress !== undefined && (
                        <EuiButtonEmpty></EuiButtonEmpty> //dummy element just align visually
                      )}
                      {card.started === false && (
                        <EuiButton fill>View Guide</EuiButton>
                      )}
                      {card.static && (
                        <EuiButton fill>View integrations</EuiButton>
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
            <EuiLink href="../kibana">
              I'd like to do something else (Skip)
            </EuiLink>
          </EuiText>
        </div>
      </EuiPanel>
    </KibanaLayout>
  );
};

export default GuidedSetup;
