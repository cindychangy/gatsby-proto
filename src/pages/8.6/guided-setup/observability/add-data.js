import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Observability',
    href: '#',
  },
  {
    text: 'Setup guide',
    href: '../',
  },
  {
    text: 'Step 1: add data',
  },
];

const STEPNUMBER = 1;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
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
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default AddData;
