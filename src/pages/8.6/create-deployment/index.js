/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import {
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTitle,
  EuiText,
  EuiHorizontalRule,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
} from '@elastic/eui';

import Navbar from '../../../components/navbar';
import { deploymentStyles } from './create-deployment.styles';
import { navigate, withPrefix } from 'gatsby';

const CreateDeployment = () => {
  const styles = deploymentStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/8.6/guided-setup');
    }, 1500);
  };

  return (
    <>
      <Navbar
        isCloud
        crumbs={[
          {
            text: 'Cloud',
            href: '#',
          },
          {
            text: 'Deployments',
            href: '#',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <EuiSpacer size="xxl" />
      <EuiPanel paddingSize="none" css={styles.panel}>
        <div css={styles.panelContainer}>
          <EuiTitle>
            <h2>Create your first deployment</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued" grow={false} size="s">
            <p>
              A deployment includes Elasticsearch, Kibana, and other Elastic
              Stack features, allowing you to store, search, and analyze your
              data.
            </p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiHorizontalRule />
          <EuiSpacer size="s" />

          <EuiTitle size="xs">
            <h5>Name</h5>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiFieldText fullWidth placeholder="My deployment" />

          <EuiSpacer size="l" />
          <EuiFlexGroup gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiIcon type={withPrefix('/images/icon-gcp.svg')} size="xxl" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <p>
                  GCP Iowa (us-central1) &nbsp;{' '}
                  <EuiLink href="#">Edit settings</EuiLink>
                </p>
              </EuiText>
              <EuiText color="subdued" size="xs">
                <p>Storage optimized, 8.1.3</p>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
        <EuiPanel css={styles.buttonPanel}>
          <EuiButton fill isLoading={isLoading} onClick={() => handleClick()}>
            Create deployment
          </EuiButton>
        </EuiPanel>
      </EuiPanel>
    </>
  );
};

export default CreateDeployment;
