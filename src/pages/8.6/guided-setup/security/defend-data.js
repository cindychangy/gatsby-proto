import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Security',
    href: '#',
  },
  {
    text: 'Guided setup',
    href: '../',
  },
  {
    text: 'Step 1: defend your data',
  },
];

const STEPNUMBER = 1;

const COMPLETED_STEPS = {
  'step-1': '',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const DefendData = () => {
  return (
    <StepPlaceholder
      title="Add and view your data with Elastic Defend"
      breadcrumbs={BREADCRUMBS}
      section="Security"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default DefendData;
