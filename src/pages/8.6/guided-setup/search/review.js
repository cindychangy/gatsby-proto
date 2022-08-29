import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Search',
    href: '#',
  },
  {
    text: 'Guided Setup',
    href: '../../',
  },
  {
    text: 'Step 4: Review Analytics',
  },
];

const STEPNUMBER = 4;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': 'done',
  'step-4': '',
};

const ReviewAnalytics = () => {
  return (
    <StepPlaceholder
      title="Review your search analytics"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      currentProgress={75}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
      hasTour
    />
  );
};

export default ReviewAnalytics;
