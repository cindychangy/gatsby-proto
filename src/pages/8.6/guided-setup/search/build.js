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
    text: 'Step 2: search experience',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': '',
  'step-3': '',
  'step-4': '',
};

const SearchExperience = () => {
  return (
    <StepPlaceholder
      title="Build a search experience"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default SearchExperience;
