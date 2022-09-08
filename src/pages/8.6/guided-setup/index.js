/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import {
  EuiSpacer,
  EuiButton,
  EuiTitle,
  EuiText,
  EuiLink,
  EuiCard,
  EuiFlexItem,
  EuiPanel,
  EuiFlexGrid,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana/kibana';
import { GuidedSetupStyles } from './guided-setup.styles';
import { CARD_DATA } from './guided-setup.data';
import { withPrefix } from 'gatsby';

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

  const handleGuideClick = (section, optOut) => {
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
            <p>
              Select an option below to get a quick tour of the most valuable
              features based on your preferences.
            </p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiSpacer size="xxl" />
          <EuiFlexGrid columns={4} gutterSize="l">
            {CARD_DATA.map((card, index) => (
              <EuiFlexItem key={index}>
                <EuiCard
                  display="subdued"
                  image={withPrefix(`/images/${card.image}`)}
                  onClick={() => handleGuideClick(card.section)}
                  paddingSize="l"
                  textAlign="center"
                  title={card.title}
                  description={card.description}
                  betaBadgeProps={{
                    label: card.section,
                  }}
                  footer={
                    <div style={{ textAlign: 'center' }}>
                      <EuiButton fill>View guide</EuiButton>
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
