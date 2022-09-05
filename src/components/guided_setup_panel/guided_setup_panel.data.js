export const GUIDE_SEARCH = {
  title: 'Search my data',
  media:
    '<img src="https://cindychangy.github.io/platform-onboarding/images/media-mock-search.png">',
  intro:
    "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
  link: {
    title: 'Learn more about Elastic Enterprise Search',
    url: '#',
  },
  steps: [
    {
      title: 'Add Data',
      description:
        '<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>',
      link: {
        title: 'Getting started with Elastic Enterprise Search',
        url: '#',
      },
      stepPath: 'search/add-data',
      order: 1,
    },
    {
      title: 'Build a search experience',
      description:
        '<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>',
      link: null,
      stepPath: 'search/build',
      order: 2,
    },
    {
      title: 'Optimize your search relevance',
      description:
        '<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',
      link: null,
      stepPath: 'search/optimize',
      order: 3,
    },
    {
      title: 'Review your search analytics',
      description:
        '<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',
      link: null,
      stepPath: 'search/review',
      order: 4,
    },
  ],
};

export const GUIDE_OBSERVABILITY = {
  title: 'Observe my Infrastructure',
  media:
    '<img src="https://cindychangy.github.io/platform-onboarding/images/media-mock.png">',
  intro:
    "We'll help you quickly gain visibility into your environment using Elastic's out-of-the-box integrations.",
  link: {
    title: 'Observability 101 Documentation',
    url: '#',
  },
  steps: [
    {
      title: 'Add data',
      description:
        '<ul><li>Send your data easily.</li><li>Quickly monitor popular cloud services, applications, systems, containers, and more.</li><li>Select your integrations.</li></ul>',
      link: {
        title: 'Integrations for Observability',
        url: '#',
      },
      stepPath: 'observability/add-data',
      order: 1,
    },
    {
      title: 'Tour Elastic Observability',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'observability/tour',
      order: 2,
    },
    {
      title: 'Create an Alert',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'observability/alert',
      order: 3,
    },
    {
      title: 'Do more with Elastic Observability',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'observability/do-more',
      order: 4,
    },
  ],
};

export const GUIDE_MONITORING = {
  title: 'Monitor your Environment',
  media: null,
  intro:
    'The following steps will help you get started with monitoring. We recommend going in order. ',
  link: null,
  steps: [
    {
      title: 'Monitoring Step 1',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'monitoring/step-1',
      order: 1,
    },
    {
      title: 'Monitoring Step 2',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'monitoring/step-2',
      order: 2,
    },
    {
      title: 'Monitoring Step 3',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'monitoring/step-3',
      order: 3,
    },
    {
      title: 'Monitoring Step 4',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'monitoring/step-4',
      order: 4,
    },
  ],
};

export const GUIDE_SECURITY = {
  title: 'Getting started with SIEM',
  media: null,
  intro:
    "We'll help you get set up quilckly, using Elastic's out-of-the-box integrations.",
  link: {
    title: 'Security 101 Documentation',
    url: '#',
  },
  steps: [
    {
      title: 'Add and view your data with Elastic Defend',
      description:
        '<ul><li>Select your integrations & start sending data.</li><li>Make sure your data look good.</li></ul>',
      link: {
        title: 'Our top integrations for Secrutiy',
        url: '#',
      },
      stepPath: 'security/defend-data',
      order: 1,
    },
    {
      title: 'Turn on rules',
      description:
        '<ul><li>Load prebuilt rules.</li><li>Select rules relevant to you.</li></ul>',
      link: {
        title: 'Security rules in-depth webinar',
        url: '#',
      },
      stepPath: 'security/rules',
      order: 2,
    },
    {
      title: 'View Alerts',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'security/alerts',
      order: 3,
    },
    {
      title: 'Cases and investigations',
      description:
        '<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>',
      link: null,
      stepPath: 'security/cases-investigations',
      order: 4,
    },
  ],
};
