import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Monitoring',
    href: '#',
  },
  {
    text: 'Guided setup',
    href: '../',
  },
  {
    text: 'Step 4: step four',
  },
];

const STEPNUMBER = 4;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': 'done',
  'step-4': '',
};

const StepTwo = () => {
  return (
    <StepPlaceholder
      title="Monitoring Step 4"
      breadcrumbs={BREADCRUMBS}
      section="Monitoring"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default StepTwo;
