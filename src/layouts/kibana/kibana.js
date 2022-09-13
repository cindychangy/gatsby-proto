/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiHeader,
  EuiIcon,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiListGroup,
  useGeneratedHtmlId,
  EuiAvatar,
  EuiTitle,
  EuiText,
  EuiPageTemplate,
  useEuiTheme,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';
import GuidedSetupPanel from '../../components/guided_setup_panel/guided_setup_panel';
import { kibanaLayoutStyles } from './kibana.styles';
import '../../styles/global.css';

const pathPrefix = process.env.PATH_PREFIX;

const KibanaLayout = ({
  onClick,
  guideOpen,
  setGuide,
  section,
  confetti,
  buttonDisabled,
  isSetupPage,
  pageHeader,
  stepNumber,
  breadcrumbs,
  hasSidebar,
  children,
  ...rest
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = kibanaLayoutStyles(euiTheme);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [exitGuide, setExitGuide] = useState(false);
  const [removeGuideButton, setRemoveGuideButton] = useState(false);

  let exitGuideModal;

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const handleOptOut = () => {
    onClick();
    setExitGuide(true);
  };

  const removeGuide = () => {
    setExitGuide(false);
    setRemoveGuideButton(true);
  };

  const collapsibleNav = (
    <EuiCollapsibleNav
      ownFocus={false}
      css={css`
        margin-top: 96px; // two top navs
        min-height: calc(100vh - 96px);
        display: flex;
      `}
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}
    >
      {/* Dark deployments section */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <EuiCollapsibleNavGroup isCollapsible={false} background="dark">
          <EuiListGroup
            color="ghost"
            maxWidth="none"
            gutterSize="none"
            size="s"
            listItems={[
              {
                label: 'Manage deployment',
                href: '#',
                iconType: 'logoCloud',
                iconProps: {
                  color: 'ghost',
                },
              },
            ]}
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      <EuiHorizontalRule margin="none" />
      {/* Menu items */}
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={(e) => e.stopPropagation()}
            >
              Analytics
            </a>
          }
          buttonElement="div"
          iconType="logoKibana"
          isCollapsible={true}
          initialIsOpen="Kibana"
        ></EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  const leftSectionItems = [collapsibleNav];

  if (exitGuide) {
    exitGuideModal = (
      <EuiModal maxWidth={448} aria-label="optOutModal">
        <EuiModalBody>
          <EuiSpacer size="m" />
          <EuiTitle size="m">
            <h2>Are you sure you want to quit this setup guide?</h2>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>You can restart guided setup from the Kibana Hompage.</p>
          </EuiText>
        </EuiModalBody>
        <EuiModalFooter>
          <EuiButtonEmpty onClick={() => setExitGuide(false)}>
            Cancel
          </EuiButtonEmpty>
          <EuiButton color="warning" onClick={removeGuide} fill>
            Quit Guide
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

  return (
    <>
      {exitGuideModal}
      <div css={styles.mainWrapper}>
        <EuiHeader
          position="fixed"
          theme="dark"
          sections={[
            {
              items: [
                <EuiHeaderLogo
                  key="elastic-logo"
                  iconType="logoElastic"
                  href="#"
                >
                  Elastic
                </EuiHeaderLogo>,
              ],
              borders: 'none',
            },
            {
              items: [
                !removeGuideButton && (
                  <GuidedSetupPanel
                    key="onboarding-setup"
                    onClick={onClick}
                    handleOptOut={handleOptOut}
                    guideOpen={guideOpen}
                    buttonDisabled={buttonDisabled}
                    section={section}
                    confetti={confetti}
                    isSetupPage={isSetupPage}
                    stepNumber={stepNumber}
                  />
                ),
                ,
                <EuiHeaderSectionItemButton
                  key={useGeneratedHtmlId()}
                  aria-label="Account menu"
                >
                  <EuiAvatar name="John Username" size="s" />
                </EuiHeaderSectionItemButton>,
              ],
              borders: 'none',
            },
          ]}
        />

        <EuiHeader
          position="fixed"
          sections={[
            {
              items: leftSectionItems,
              borders: 'right',
            },
            {
              items: [
                <EuiHeaderSectionItemButton
                  key={useGeneratedHtmlId()}
                  aria-label="Account menu"
                >
                  <EuiAvatar type="space" name="Default Space" size="s" />
                </EuiHeaderSectionItemButton>,
              ],
              breadcrumbs: breadcrumbs,
              borders: 'right',
            },
          ]}
        />

        {pageHeader && (
          <div css={styles.header}>
            <div className="euiPageBody--restrictWidth-default">
              <EuiTitle size="l">
                <h1>{pageHeader}</h1>
              </EuiTitle>
            </div>
          </div>
        )}

        <div css={styles.contentWrapper} className="fullBody">
          {hasSidebar ? (
            children
          ) : (
            <EuiPageTemplate restrictWidth {...rest}>
              {children}
            </EuiPageTemplate>
          )}
        </div>
      </div>
    </>
  );
};

export default KibanaLayout;
