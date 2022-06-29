import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { activityTags } from '../../constants/constants';
import NormalActivity from './index';

describe('<ActivityFilter />', () => {
  beforeEach(() => {
    render(<NormalActivity />);
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

  it('should dispear when click close', () => {
    const selector = screen.getByText(activityTags[0]);

    userEvent.click(selector);

    const selectedFilter = screen.queryByTestId('selected-filter');
    const selectedFilterCancelButton = screen.getByRole('img');

    userEvent.click(selectedFilterCancelButton);

    const selectedFilterAfterClick = screen.queryByTestId('selected-filter');

    expect(selectedFilter).toBeDefined();
    expect(selectedFilterAfterClick).toBeNull();
  });

});
