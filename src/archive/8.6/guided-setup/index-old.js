/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import {
  EuiSpacer,
  EuiImage,
  EuiButton,
  EuiTitle,
  EuiText,
  EuiCard,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiFlexGrid,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { GUIDE_DATA } from '../../../constants/guided-setup.data';
import { navigate, withPrefix } from 'gatsby';
import { css } from '@emotion/react';

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
  const [newUserStartPage, setNewUserStartPage] = useState(true);

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

  const handleGuideClick = (section) => {
    setGuide(!guideOpen);
    setButtonDisabled(!buttonDisabled);
    if (section) {
      setSection(section);
      setNewUserStartPage(true);
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
      newUserStartPage={newUserStartPage}
    >
      <EuiSpacer size="xxl" />
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
                image={
                  <EuiImage
                    src={withPrefix(`/images/${guide.cardImage}`)}
                    size={200}
                    margin="s"
                  />
                }
                onClick={
                  guide.cardTitle !== 'Observe my data'
                    ? () => handleGuideClick(guide.section)
                    : () => navigate('pages/integrations')
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
                    {!guide.started && !guide.static && (
                      <EuiButton fill>View Guide</EuiButton>
                    )}
                    {guide.static && (
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
          <EuiButtonEmpty
            iconSide="right"
            onClick={() => navigate('../kibana')}
          >
            I'd like to do something else (skip)
          </EuiButtonEmpty>
        </EuiText>
      </div>
    </KibanaLayout>
  );
};

export default GuidedSetup;
