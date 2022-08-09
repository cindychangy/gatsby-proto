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
    text: 'Step 4: Do More with Observability',
  },
];

const STEPNUMBER = 4;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': 'done',
  'step-4': '',
};

const DoMore = () => {
  return (
    <StepPlaceholder
      title="Do More with Elastic Observability"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      currentProgress={75}
      completedSteps={COMPLETED_STEPS}
    />
  );
};

export default DoMore;
