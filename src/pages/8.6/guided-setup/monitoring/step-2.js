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
    text: 'Step 2: Step Two',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const StepTwo = () => {
  return (
    <StepPlaceholder
      title="Monitoring Step"
      breadcrumbs={BREADCRUMBS}
      section="Monitoring"
      stepNumber={STEPNUMBER}
      currentProgress={75}
      completedSteps={COMPLETED_STEPS}
    />
  );
};

export default StepTwo;
