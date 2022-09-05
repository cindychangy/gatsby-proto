import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Monitoring',
    href: '#',
  },
  {
    text: 'Guided Setup',
    href: '../',
  },
  {
    text: 'Step 1: Step One',
  },
];

const STEPNUMBER = 1;

const COMPLETED_STEPS = {
  'step-1': '',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const StepOne = () => {
  return (
    <StepPlaceholder
      title="Monitoring Step 1"
      breadcrumbs={BREADCRUMBS}
      section="Monitoring"
      stepNumber={STEPNUMBER}
      currentProgress={0}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default StepOne;
