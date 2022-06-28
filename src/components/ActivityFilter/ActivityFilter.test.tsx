import { queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { activityTags } from '../../constants/constants';
import ActivityFilter from './index';

describe('<ActivityFilter />', () => {
  it('should show initial selector and filter tags', () => {
    const { getByText } = render(<ActivityFilter />);

    getByText('标签筛选：');
    activityTags.forEach(tag => getByText(tag));
  });

  it('should show tag in filter when tag selected', () => {
    render(<ActivityFilter />);

    const unselectedFilter = screen.queryByTestId('selected-filter');
    const selector = screen.getByText(activityTags[0]);

    userEvent.click(selector);

    const selectedFilter = screen.getByTestId('selected-filter');

    expect(unselectedFilter).toBeNull();
    expect(selectedFilter).toBeDefined();
  });
});
