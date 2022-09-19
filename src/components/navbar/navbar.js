import React from 'react';
import {
  EuiAvatar,
  EuiButtonEmpty,
  EuiContextMenu,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPopover,
  useEuiTheme,
} from '@elastic/eui';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';

const Navbar = ({ crumbs, isCloud, isIntegrations }) => {
  const { euiTheme } = useEuiTheme();

  const Account = () => {
    const [isAccountOpen, setIsAccountOpen] = React.useState(false);
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
        <EuiContextMenu
          initialPanelId={0}
          panels={[
            {
              id: 0,
              title: 'geauxtrude@suedemont.com',
              items: [
                {
                  name: 'Profile',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.mediumShade}
                      type="user"
                      size="m"
                    />
                  ),
                },
                {
                  name: 'Billing',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.mediumShade}
                      type="payment"
                      size="m"
                    />
                  ),
                },
                {
                  name: 'Organization',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.mediumShade}
                      type="users"
                      size="m"
                    />
                  ),
                },
                {
                  name: 'Preferences',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.mediumShade}
                      type="controlsHorizontal"
                      size="m"
                    />
                  ),
                },
                {
                  name: 'Help & Support',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.mediumShade}
                      type="questionInCircle"
                      size="m"
                    />
                  ),
                  panel: 1,
                },
                {
                  name: 'Log out',
                  icon: (
                    <EuiIcon
                      color={euiTheme.colors.mediumShade}
                      type="exit"
                      size="m"
                    />
                  ),
                  onClick: () => {
                    navigate('/');
                  },
                },
              ],
            },
            {
              id: 1,
              title: 'Help & Support',
              items: [
                {
                  name: 'Documentation',
                },
                {
                  name: 'Ask Elastic',
                },
                {
                  name: 'Give feedback',
                },
                {
                  name: 'Open an issue in GitHub',
                },
              ],
            },
          ]}
        />
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
