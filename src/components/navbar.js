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
import Account from './account';

const Navbar = ({ crumbs, isCloud, isIntegrations }) => {
  const { euiTheme } = useEuiTheme();

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
