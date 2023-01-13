/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/react';
import {
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiCard,
  EuiBadge,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { GUIDE_DATA } from '../../../constants/guided-setup.data';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';

const guideCard = css`
  .euiCard__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const GuidedSetup = () => {
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
          <p>Select an option below and we'll help you get started</p>
        </EuiText>
        <EuiSpacer size="xxl" />

        <div>
          <EuiSpacer size="l" />
          <EuiFlexGrid columns={3} gutterSize="xl">
            {GUIDE_DATA.map((guide, index) => (
              <EuiFlexItem key={index}>
                <EuiCard
                  style={{ position: 'relative', minHeight: '100px' }}
                  css={guideCard}
                  onClick={() => handleGuideClick(guide.section)}
                  title={
                    <>
                      <EuiSpacer size="s" />
                      <h3 style={{ fontWeight: 600 }}>{guide.title}</h3>
                    </>
                  }
                  titleSize="xs"
                  betaBadgeProps={{
                    label: guide.section,
                  }}
                  // children={
                  //   <EuiFlexGroup>
                  //     <EuiFlexItem>
                  //       <EuiBadge
                  //         color="hollow"
                  //         iconType={
                  //           (guide.section === 'Search' &&
                  //             'logoElasticsearch') ||
                  //           (guide.section === 'Observability' &&
                  //             'logoObservability') ||
                  //           (guide.section === 'Security' && 'logoSecurity')
                  //         }
                  //         iconSide="left"
                  //         style={{
                  //           padding: '5px',
                  //           borderRadius: '24px',
                  //           padding: '2px 12px',
                  //           fontSize: '0.8571rem',
                  //           lineHeight: '24px',
                  //           border: '1px solid rgb(211 218 230)',
                  //           fontWeight: '700',
                  //           textTransform: 'uppercase',
                  //           letterSpacing: '0.05em',
                  //           position: 'absolute',
                  //           insetBlockStart: '0px',
                  //           insetInlineStart: '50%',
                  //           transform: 'translateX(-50%) translateY(-50%)',
                  //           minInlineSize: 'min(30%, 112px)',
                  //           maxInlineSize: 'calc(100% - 32px)',
                  //         }}
                  //       >
                  //         {guide.section}
                  //       </EuiBadge>
                  //     </EuiFlexItem>
                  //   </EuiFlexGroup>
                  // }
                />
                <EuiSpacer size="m" />
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </div>
        <EuiSpacer size="xl" />
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
