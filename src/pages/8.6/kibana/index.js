import * as React from 'react';
import {
  EuiPageTemplate,
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiButton,
  EuiButtonEmpty,
  EuiImage,
  EuiAvatar,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiText,
} from '@elastic/eui';
import { navigate, withPrefix } from 'gatsby';

const KibanaHome = () => {
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
              <EuiButton
                color="success"
                size="s"
                onClick={() => navigate('../../8.6/guided-setup')}
                key="onboarding-setup-button"
                fill
                style={{ margin: '0 10px' }}
              >
                Setup guide
              </EuiButton>,
              <EuiHeaderSectionItemButton flush="both">
                <EuiAvatar
                  color="#25282f"
                  iconType="help"
                  name="account"
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                />
              </EuiHeaderSectionItemButton>,
              <EuiHeaderSectionItemButton flush="both">
                <EuiAvatar color="#25282f" iconType="cheer" name="account" />
              </EuiHeaderSectionItemButton>,
              <EuiHeaderSectionItemButton key="user" aria-label="Account menu">
                <EuiAvatar size="s" name="Else Lane" color="#06bfb4" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        sections={[
          {
            items: [
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
            breadcrumbs: [
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
            ],
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
                <EuiButton
                  fill
                  onClick={() => navigate('/8.6/guided-setup')}
                  iconType="plusInCircle"
                >
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
