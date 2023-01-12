/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { navigate, withPrefix } from 'gatsby';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTextAlign,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiHorizontalRule,
  EuiButtonEmpty,
  useEuiTheme,
} from '@elastic/eui';
import Header from '../../components/header';
import { css } from '@emotion/react';

const container = css`
  padding: 30px 40px 0 0;
`;

const formContainer = css`
  padding: 0 40px;
  margin: auto;
  position: relative;
`;

const password = css`
  text-align: center;
`;

const formPanel = css`
  width: 430px;
`;

const panelSpace = css`
  padding: 0 8px;
`;

const Login = () => {
  const { euiTheme } = useEuiTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/8.6/profile');
    }, 1000);
  };

  return (
    <>
      <Header accountType="login" />
      <div css={formContainer}>
        <EuiFlexGroup
          direction="row"
          justifyContent="center"
          alignItems="flexStart"
        >
          <EuiFlexItem grow={false}>
            <EuiPanel paddingSize="l" css={formPanel}>
              <div css={panelSpace}>
                <EuiSpacer size="s" />
                <EuiTitle size="s">
                  <EuiTextAlign textAlign="center">
                    <h1>Log in</h1>
                  </EuiTextAlign>
                </EuiTitle>
                <EuiSpacer size="xl" />
                <EuiFormRow label="Email">
                  <EuiFieldText icon="user" fullWidth />
                </EuiFormRow>
                <EuiSpacer size="l" />
                <EuiFormRow label="Password">
                  <EuiFieldPassword type="dual" fullWidth />
                </EuiFormRow>
                <EuiSpacer size="l" />
                <EuiButton
                  fill
                  fullWidth
                  isLoading={isLoading}
                  onClick={() => handleClick()}
                >
                  Log in
                </EuiButton>
                <EuiSpacer size="m" />
                <div css={password}>
                  <EuiButtonEmpty href="#">Forgot password?</EuiButtonEmpty>
                </div>
                <EuiFlexGroup
                  alignItems="center"
                  gutterSize="s"
                  responsive={false}
                >
                  <EuiFlexItem>
                    <EuiHorizontalRule />
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText color="subdued" size="s">
                      Or log in with
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiHorizontalRule />
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup gutterSize="s" responsive={false}>
                  <EuiFlexItem>
                    <EuiButton
                      iconSide="left"
                      iconType={withPrefix('/images/icon-google.svg')}
                    >
                      Google
                    </EuiButton>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiButton
                      iconSide="left"
                      iconType={withPrefix('/images/icon-microsoft.svg')}
                    >
                      Microsoft
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </div>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default Login;
