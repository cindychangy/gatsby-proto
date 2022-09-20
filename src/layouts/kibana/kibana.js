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
  EuiPopover,
  EuiContextMenu,
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
  EuiPanel,
  EuiFlexGroup,
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
  completedSteps,
  ...rest
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = kibanaLayoutStyles(euiTheme);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [exitGuide, setExitGuide] = useState(false);
  const [removeGuideButton, setRemoveGuideButton] = useState(false);

  let exitGuideModal;

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const Account = () => {
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    return (
      <EuiPopover
        anchorPosition="downRight"
        button={
          <EuiAvatar
            color="#25282f"
            iconType="help"
            name="account"
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          />
        }
        closePopover={() => setIsAccountOpen(false)}
        isOpen={isAccountOpen}
        panelPaddingSize="none"
      >
        <EuiPanel style={{ width: '255px' }}>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiText size="s">
                <h4>Help</h4>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText textAlign="right" size="s">
                <h4>v 8.2.1</h4>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule margin="s" />
          <EuiButtonEmpty>Kibana documentation</EuiButtonEmpty>
          <EuiButtonEmpty>Ask Elastic</EuiButtonEmpty>
          <EuiButtonEmpty>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              class="euiIcon euiIcon--medium euiIcon--inherit euiButtonContent__icon"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M16 0C7.164 0 0 7.343 0 16.4c0 7.248 4.584 13.394 10.942 15.562.8.15 1.092-.356 1.092-.789 0-.39-.014-1.684-.022-3.053-4.45.991-5.39-1.934-5.39-1.934-.728-1.894-1.776-2.398-1.776-2.398-1.454-1.017.11-.997.11-.997 1.606.114 2.452 1.69 2.452 1.69 1.428 2.506 3.746 1.781 4.656 1.36.146-1.056.56-1.78 1.016-2.19-3.552-.414-7.288-1.821-7.288-8.105 0-1.792.624-3.254 1.646-4.402-.164-.416-.714-2.085.158-4.342 0 0 1.341-.44 4.4 1.681A14.882 14.882 0 0116 7.932c1.36.006 2.728.188 4.006.553 3.053-2.124 4.396-1.681 4.396-1.681.875 2.259.325 3.926.16 4.34 1.026 1.148 1.645 2.61 1.645 4.402 0 6.3-3.742 7.687-7.307 8.094.577.508 1.086 1.505 1.086 3.035 0 2.192-.021 3.96-.021 4.5 0 .437.29.947 1.101.787C27.42 29.79 32 23.644 32 16.4 32 7.343 24.836 0 16 0z"></path>
            </svg>
            &nbsp;Open an issue with Github
          </EuiButtonEmpty>
        </EuiPanel>
      </EuiPopover>
    );
  };

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
            <h2>Quit this setup guide and discard progress?</h2>
          </EuiTitle>
          <EuiSpacer size="m" />
          <EuiText>
            <p>
              You can restart anytime, just click Setup guide on the homepage.
            </p>
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

  if (typeof HTMLElement !== `undefined`) {
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
                      completedSteps={completedSteps}
                    />
                  ),
                  ,
                  <EuiHeaderSectionItemButton flush="both">
                    <Account />
                  </EuiHeaderSectionItemButton>,
                  <EuiHeaderSectionItemButton flush="both">
                    <EuiAvatar
                      color="#25282f"
                      iconType="cheer"
                      name="account"
                    />
                  </EuiHeaderSectionItemButton>,
                  <EuiHeaderSectionItemButton
                    key="user"
                    aria-label="Account menu"
                  >
                    <EuiAvatar size="s" name="Else Lane" color="#06bfb4" />
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
  } else {
    return true;
  }
};

export default KibanaLayout;
