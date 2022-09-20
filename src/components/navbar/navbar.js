import React, { useState } from 'react';
import {
  EuiAvatar,
  EuiButtonEmpty,
  EuiContextMenu,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPopover,
  EuiFlexGroup,
  EuiPanel,
  EuiText,
  EuiFlexItem,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';

const Navbar = ({ crumbs, isCloud, isIntegrations }) => {
  const { euiTheme } = useEuiTheme();

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

  const Add = () => {
    const [isAddOpen, setIsAddOpen] = React.useState(false);
    return (
      <EuiPopover
        anchorPosition="downRight"
        button={
          <EuiAvatar
            color={euiTheme.colors.primary}
            iconSize="l"
            iconType="plus"
            name="add"
            onClick={() => setIsAddOpen(!isAddOpen)}
          />
        }
        closePopover={() => setIsAddOpen(false)}
        isOpen={isAddOpen}
        panelPaddingSize="none"
      >
        <EuiContextMenu
          initialPanelId={0}
          css={css`
            width: 220px !important;
            .euiContextMenuItem:hover svg,
            .euiContextMenuItem:focus svg {
              fill: ${euiTheme.colors.primary} !important;
            }
            .euiContextMenu__itemLayout {
              flex-direction: row-reverse !important;
              svg {
                margin-right: 0 !important;
              }
            }
          `}
          panels={[
            {
              id: 0,
              items: [
                {
                  name: 'Add more data',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.lightShade}
                      type="plusInCircleFilled"
                      size="m"
                    />
                  ),
                },
                {
                  isSeparator: true,
                },
                {
                  name: 'Invite teammates',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.lightShade}
                      type="plusInCircleFilled"
                      size="m"
                    />
                  ),
                },
                {
                  isSeparator: true,
                },
                {
                  name: 'Create new deployment',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.lightShade}
                      type="plusInCircleFilled"
                      size="m"
                    />
                  ),
                },
                {
                  isSeparator: true,
                },
                {
                  name: 'Begin new workflow',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.lightShade}
                      type="plusInCircleFilled"
                      size="m"
                    />
                  ),
                },
              ],
            },
          ]}
        />
      </EuiPopover>
    );
  };

  if (typeof HTMLElement !== `undefined`) {
    return (
      <>
        <EuiHeader
          theme="dark"
          sections={[
            {
              items: [
                <EuiHeaderLogo iconType="logoElastic">Elastic</EuiHeaderLogo>,
              ],
              borders: 'none',
            },
            {
              items: [
                <EuiHeaderSectionItemButton flush="both">
                  <Account />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton flush="both">
                  <EuiAvatar color="#25282f" iconType="cheer" name="account" />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton
                  key="user"
                  aria-label="Account menu"
                >
                  <EuiAvatar size="s" name="Else Lane" color="#06bfb4" />
                </EuiHeaderSectionItemButton>,
                <>
                  {/* {!isCloud && (
                    <EuiHeaderSectionItemButton flush="both">
                      <Add />
                    </EuiHeaderSectionItemButton>
                  )} */}
                </>,
              ],
              borders: 'none',
            },
          ]}
        />
        <EuiHeader
          sections={[
            {
              items: isCloud
                ? []
                : [
                    <EuiHeaderSectionItemButton
                      aria-label="menu navigation"
                      flush="both"
                    >
                      <EuiIcon type="menu" />
                    </EuiHeaderSectionItemButton>,
                    <EuiHeaderSectionItemButton
                      aria-label="menu navigation"
                      flush="both"
                    >
                      <EuiAvatar name="Elastic Space" size="s" type="space" />
                    </EuiHeaderSectionItemButton>,
                  ],
              breadcrumbs: crumbs,
            },
            {
              items: isIntegrations
                ? [
                    <EuiButtonEmpty
                      className="s-tour-4"
                      size="s"
                      iconType="indexOpen"
                      onClick={() =>
                        navigate('/8.4/integrations/browse/security')
                      }
                    >
                      Add integrations
                    </EuiButtonEmpty>,
                  ]
                : [],
            },
          ]}
        />
      </>
    );
  } else {
    return true;
  }
};

export default Navbar;
