export const GUIDE_DATA = [
  {
    section: 'Search',
    title: 'Add search to my application',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    // started: false,
    progress: '3/4 steps complete',
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Security',
    title: 'Manage my security information and events',
    // cardTitle: 'Observe my Kubernetes infrastructure',
    // cardSummary:
    //   'Monitor your Kubernetes infrastructure by consolidating your logs and metrics.',
    // cardImage: 'observability.png',
    // media: null,

    complete: true,
    intro:
      "We'll help you quickly gain visibility into your environment using Elastic's out-of-the-box integrations.",
    link: {
      title: 'Observability 101 Documentation',
      url: '#',
    },
    startPageProgress: true,
    startPageSteps: 2,
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
        pageProgressOpen: true,
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
  },
  {
    section: 'Observability',
    title: 'Monitor my Kubernetes',
    progress: '2/4 steps complete',
    // cardTitle: 'Observe my data',
    // cardSummary:
    //   'Choose one of our many integrations to bring your data in, and start visualizing it.',
    // cardImage: 'observability.png',
    // static: true,
    // media: null,
    intro:
      'The following steps will help you get started with monitoring. We recommend going in order. ',
    link: null,
    started: false,
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
  },
  {
    section: 'Search',
    title: 'Add search to my ecommerce store',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Observability',
    title: "Monitor my application's performance (APM)",
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Search',
    title: 'Search my internal workplace documents',
    progress: '1/4 steps complete',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Security',
    title: 'Protect my cloud assets',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Observability',
    title: 'Analyze my logs',
    progress: '3/4 steps complete',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    // started: false,
    progress: '3/4 steps complete',
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Security',
    title: 'Protect my endpoints',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Search',
    title: 'Add search to my knowledgebase',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Observability',
    title: 'Monitor my infrastructure',
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    // started: false,
    progress: '3/4 steps complete',
    steps: [
      {
        title: 'Add data',
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
  },
  {
    section: 'Search',
    title: 'Add search to my website',
    complete: true,
    intro:
      "We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",
    link: {
      title: 'Learn more about Elastic Enterprise Search',
      url: '#',
    },
    steps: [
      {
        title: 'Add data',
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
  },
];
