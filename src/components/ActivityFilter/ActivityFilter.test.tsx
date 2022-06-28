import { queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { activityTags } from '../../constants/constants';
import ActivityFilter from './index';

describe('<ActivityFilter />', () => {
  beforeEach(() => {
    render(<ActivityFilter />);
  });
  it('should show initial selector and filter tags', () => {
    screen.getByText('标签筛选：');
    activityTags.forEach(tag => screen.getByText(tag));
  });

  it('should show tag in filter when tag selected', () => {
    const unselectedFilter = screen.queryByTestId('selected-filter');
    const selector = screen.getByText(activityTags[0]);

    userEvent.click(selector);

    const selectedFilter = screen.getByTestId('selected-filter');

    expect(unselectedFilter).toBeNull();
    expect(selectedFilter).toBeDefined();
    expect(selectedFilter.textContent).toBe(activityTags[0]);
  });

  it('should show selected once when double click', () => {
    const selector = screen.getByText(activityTags[0]);

    userEvent.dblClick(selector);

    const selectedFilter = screen.queryAllByTestId('selected-filter');

    expect(selectedFilter).toHaveLength(1);
  });
});
