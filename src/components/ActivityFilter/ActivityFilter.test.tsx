import { render } from '@testing-library/react';
import { activityTags } from '../../constants/constants';
import ActivityFilter from './index';

describe('<ActivityFilter />', () => {
  it('should show initial selector and filter tags', () => {
    const { getByText } = render(<ActivityFilter />);

    getByText('标签筛选：');
    activityTags.forEach(tag => getByText(tag));

  });
});
