import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Observability',
    href: '#',
  },
  {
    text: 'Guided Setup',
    href: '../',
  },
  {
    text: 'Step 2: Tour Observability',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const Alert = () => {
  return (
    <StepPlaceholder
      title="Tour Observability"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      currentProgress={25}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Alert;
