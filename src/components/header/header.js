/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';
import { navigate, withPrefix } from 'gatsby';
import { headerStyles } from './header.styles';

const Header = ({ accountType, signedIn }) => {
  const styles = headerStyles();
  const login = accountType === 'login';

  const handleClick = (route) => {
    setTimeout(() => {
      navigate(route);
    }, 1000);
  };

  return (
    <>
      <div css={styles.container}>
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
                }>
                {login ? 'Sign up' : 'Log in'}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
        <EuiImage
          size={170}
          src={
            login ? withPrefix('/images/logo-elastic.png') : withPrefix('images/logo-elastic.png')
          }
          alt="Elastic logo"
          css={styles.logo}
        />
        <EuiSpacer size="s"/>
      </div>
    </>
  );
};

export default Header;
