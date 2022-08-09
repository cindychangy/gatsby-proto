/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { EuiAvatar, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

const SearchSidebar = ({ stepNumber }) => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiAvatar
            color="plain"
            css={css`
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
              margin-right: 16px;
            `}
            iconType="logoEnterpriseSearch"
            name="Enterprise Search"
            size="m"
          />
          <strong>Enterprise Search</strong>
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav
        items={[
          {
            name: 'Overview',
            id: `searchnav__0`,
          },
          {
            name: 'Content',
            id: `searchnav__1`,
            items: [
              {
                name: 'Indicies',
                id: `search__1`,
                onClick: handleClick,
                className: 'search-tour-1',
              },
              {
                name: 'Crawlers and connectors',
                id: `search__2`,
                onClick: handleClick,
              },
              {
                name: 'Data enrichment',
                id: `search__3`,
                onClick: handleClick,
              },
            ],
          },
          {
            name: 'Search',
            id: `searchnav__3`,
            items: [
              {
                name: 'Engines',
                id: `search__4`,
                onClick: handleClick,
              },
              {
                name: 'Experiences',
                id: `search__5`,
                onClick: handleClick,
              },
            ],
          },
          {
            name: 'Analytics',
            id: `searchnav__4`,
            items: stepNumber === 4 && [
              {
                name: 'Buckets',
                id: `search__6`,
                onClick: handleClick,
                items: [
                  {
                    name: 'My Ecommerce Store',
                    id: '0.1',
                    onClick: handleClick,
                  },
                  {
                    name: 'Overview',
                    id: '0.2',
                    onClick: () => console.log('clicked'),
                    className: 'search-tour-5',
                    isSelected: true,
                  },
                  {
                    name: 'Event Logs',
                    id: '0.3',
                    onClick: handleClick,
                  },
                  {
                    name: 'Settings',
                    id: '0.4',
                    onClick: handleClick,
                  },
                ],
              },
            ],
          },
          {
            name: 'Legacy Products',
            id: `searchnav__5`,
            items: [
              {
                name: 'App Search',
                id: `search__7`,
                onClick: handleClick,
              },
              {
                name: 'Workplace Search',
                id: `search__8`,
                className: 'search-tour-3',
                onClick: handleClick,
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SearchSidebar;
