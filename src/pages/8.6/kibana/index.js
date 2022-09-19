import * as React from 'react';
import {
  EuiPageTemplate,
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiButton,
  EuiButtonEmpty,
  EuiImage,
  EuiHorizontalRule,
  EuiText,
} from '@elastic/eui';
import Navbar from '../../../components/navbar/navbar';
import { navigate, withPrefix } from 'gatsby';

const KibanaHome = () => {
  return (
    <>
      <Navbar
        crumbs={[
          {
            text: 'Home',
          },
        ]}
      />
      <EuiPageTemplate template="empty">
        <EuiTitle size="l">
          <h1>Welcome home</h1>
        </EuiTitle>

        <EuiSpacer size="l" />

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              description="Create search experiences with a refined set of APIs and tools."
              image={withPrefix('/images/home--enterprise.png')}
              title="Enterprise Search"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              description="Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs."
              image={withPrefix('/images/home--observability.png')}
              title="Observability"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              description="Prevent, collect, detect, and respond to threats for unified protection across your infrastructure."
              image={withPrefix('/images/home--security.png')}
              title="Security"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              description="Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications."
              image={withPrefix('/images/home--analytics.png')}
              title="Analytics"
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiHorizontalRule margin="xxl" />

        <EuiFlexGroup alignItems="center" gutterSize="l">
          <EuiFlexItem>
            <EuiTitle size="s">
              <h2>Get started by adding integrations</h2>
            </EuiTitle>
            <EuiSpacer size="l" />
            <EuiText size="m">
              <p>
                To start working with your data, use one of our many ingest
                options. Collect data from an app or service, or upload a file.
                If you&apos;re not ready to use your own data, add a sample data
                set.
              </p>
            </EuiText>
            <EuiSpacer size="l" />
            <EuiFlexGroup justifyContent="flexStart" gutterSize="m">
              <EuiFlexItem grow={false}>
                <EuiButton fill onClick={() => navigate('/8.6/guided-setup')}>
                  Launch setup guide
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton iconType="plusInCircle">Add Integrations</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="documents">
                  Try sample data
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="importAction">
                  Upload a file
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiImage
              size="xl"
              src={withPrefix('/images/illustration--integrations.svg')}
              alt="packing box with integrations"
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiHorizontalRule margin="xxl" />
      </EuiPageTemplate>
    </>
  );
};

export default KibanaHome;
