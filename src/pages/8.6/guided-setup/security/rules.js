import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Security',
    href: '#',
  },
  {
    text: 'Guided Setup',
    href: '../',
  },
  {
    text: 'Step 2: Turn on rules',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const Rules = () => {
  return (
    <StepPlaceholder
      title="Turn on rules"
      breadcrumbs={BREADCRUMBS}
      section="Security"
      stepNumber={STEPNUMBER}
      currentProgress={45}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Rules;
