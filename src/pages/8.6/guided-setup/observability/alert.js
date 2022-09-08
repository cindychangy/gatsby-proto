import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Observability',
    href: '#',
  },
  {
    text: 'Guided setup',
    href: '../',
  },
  {
    text: 'Step 3: create an alert',
  },
];

const STEPNUMBER = 3;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': '',
  'step-4': '',
};

const Alert = () => {
  return (
    <StepPlaceholder
      title="Create an Alert"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      currentProgress={50}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Alert;
