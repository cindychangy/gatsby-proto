import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Search',
    href: '#',
  },
  {
    text: 'Guided setup',
    href: '../../',
  },
  {
    text: 'Step 1: add data',
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
      section="Search"
      stepNumber={STEPNUMBER}
      currentProgress={0}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default AddData;
