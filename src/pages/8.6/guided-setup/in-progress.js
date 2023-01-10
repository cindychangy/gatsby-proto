/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import {
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiPanel,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiHorizontalRule,
  EuiBadge,
  EuiTextColor,
  EuiIcon,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana/kibana';
import { GuidedSetupStyles } from './guided-setup.styles';
import { GUIDE_DATA } from './guided-setup.data';
import { navigate, withPrefix } from 'gatsby';

const GuidedSetup = () => {
  const { euiTheme } = useEuiTheme();
  const styles = GuidedSetupStyles(euiTheme);
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
      <div css={styles.container}>
        <EuiTitle size="l" className="eui-textCenter">
          <h1>What would you like to do&nbsp;first?</h1>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText color="text" size="m" textAlign="center">
          <p>Select an option below and we'll help you get started</p>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiSpacer size="xxl" />

        <EuiFlexGrid columns={4} gutterSize="l">
          {GUIDE_DATA.map((guide, index) => (
            <EuiFlexItem key={index}>
              <EuiPanel style={{ position: 'relative' }}>
                <EuiFlexGroup
                  direction="column"
                  style={{ height: '100%' }}
                  gutterSize="none"
                >
                  <EuiFlexItem style={{ justifyContent: 'center' }}>
                    <EuiBadge
                      color="hollow"
                      iconType={
                        (guide.solution === 'Search' && 'logoElasticsearch') ||
                        (guide.solution === 'Observability' &&
                          'logoObservability') ||
                        (guide.solution === 'Security' && 'logoSecurity')
                      }
                      iconSide="left"
                      style={{
                        padding: '5px',
                        borderRadius: '24px',
                        padding: '2px 12px',
                        fontSize: '0.8571rem',
                        lineHeight: '24px',
                        border: '1px solid rgb(211 218 230)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        position: 'absolute',
                        insetBlockStart: '0px',
                        insetInlineStart: '50%',
                        transform: 'translateX(-50%) translateY(-50%)',
                        minInlineSize: 'min(30%, 112px)',
                        maxInlineSize: 'calc(100% - 32px)',
                      }}
                    >
                      {guide.solution}
                    </EuiBadge>
                    <EuiSpacer size="s" />
                    <EuiText size="s" textAlign="center">
                      <h3 style={{ fontWeight: 600 }}>{guide.title}</h3>
                      {guide.progress && (
                        <EuiTextColor color="subdued">
                          <small>{guide.progress}</small>
                        </EuiTextColor>
                      )}
                      {guide.complete && (
                        <EuiIcon type="checkInCircleFilled" color="success" />
                      )}
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiPanel>
              <EuiSpacer size="m" />
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
