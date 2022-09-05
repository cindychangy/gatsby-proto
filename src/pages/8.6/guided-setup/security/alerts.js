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
    text: 'Step 3: View Alerts',
  },
];

const STEPNUMBER = 3;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': '',
  'step-4': '',
};

const Alerts = () => {
  return (
    <StepPlaceholder
      title="View Alerts"
      breadcrumbs={BREADCRUMBS}
      section="Security"
      stepNumber={STEPNUMBER}
      currentProgress={75}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Alerts;
