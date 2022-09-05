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
    text: 'Step 1: Add data',
  },
];

const STEPNUMBER = 1;

const COMPLETED_STEPS = {
  'step-1': '',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const AddData = () => {
  return (
    <StepPlaceholder
      title="Add data"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      currentProgress={0}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default AddData;
