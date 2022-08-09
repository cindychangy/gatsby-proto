import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Search',
    href: '#',
  },
  {
    text: 'Guided Setup',
    href: '../',
  },
  {
    text: 'Step 3: Search experience',
  },
];

const STEPNUMBER = 3;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': '',
  'step-4': '',
};

const OptimizeRelevance = () => {
  return (
    <StepPlaceholder
      title="Optimize your search relevance"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      currentProgress={50}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default OptimizeRelevance;
