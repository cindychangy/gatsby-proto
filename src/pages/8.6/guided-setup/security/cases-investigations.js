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
    text: 'Step 4: cases and investigations ',
  },
];

const STEPNUMBER = 4;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': 'done',
  'step-4': '',
};

const StepFour = () => {
  return (
    <StepPlaceholder
      title="Cases and Investigations"
      breadcrumbs={BREADCRUMBS}
      section="Security"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default StepFour;
