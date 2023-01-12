/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiButton,
} from '@elastic/eui';
import { navigate, withPrefix } from 'gatsby';
import { css } from '@emotion/react';

const Header = ({ accountType, signedIn }) => {
  const login = accountType === 'login';

  const handleClick = (route) => {
    setTimeout(() => {
      navigate(route);
    }, 1000);
  };

  return (
    <>
      <div
        css={css`
          margin: 35px 30px 40px 30px;
          position: relative;
        `}
      >
        {signedIn ? (
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiButton minWidth={0} fill>
                Log out
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        ) : (
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText textAlign="right" size="s">
                {login ? "Don't have an account?" : 'Already have an account? '}
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                fill
                size="s"
                minWidth={0}
                onClick={
                  login
                    ? () => handleClick('/8.6/signup')
                    : () => handleClick('/8.6')
                }
              >
                {login ? 'Sign up' : 'Log in'}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
        <EuiImage
          size={170}
          src={
            login
              ? withPrefix('/images/logo-elastic.png')
              : withPrefix('images/logo-elastic.png')
          }
          alt="Elastic logo"
          css={css`
            position: absolute;
            left: 50%;
            transform: translate(-50%, -85%);
          `}
        />
      </div>
    </>
  );
};

export default Header;
