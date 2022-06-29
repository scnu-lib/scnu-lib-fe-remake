import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { activityTags } from '../../constants/constants';
import ActivitiesList from './index';

describe('<ActivitiesList />', () => {
  describe('Logical testing', () => {
    beforeEach(() => {
      render(<ActivitiesList />);
    });
  
    it('should show initial selector and filter tags', () => {
      screen.getByText('标签筛选：');
      activityTags.map(tag => screen.getByText(tag.name));
    });
  
    it('should show tag in filter when tag selected', () => {
      const unselectedFilter = screen.queryByTestId('selected-filter');
      const selector = screen.getByText(activityTags[0].name);
  
      userEvent.click(selector);
  
      const selectedFilter = screen.getByTestId('selected-filter');
  
      expect(unselectedFilter).toBeNull();
      expect(selectedFilter).toBeDefined();
      expect(selectedFilter.textContent).toBe(activityTags[0].name);
    });
  
    it('should show selected once when double click', () => {
      const selector = screen.getByText(activityTags[0].name);
  
      userEvent.dblClick(selector);
  
      const selectedFilter = screen.queryAllByTestId('selected-filter');
  
      expect(selectedFilter).toHaveLength(1);
    });
  
    it('should dispear when click close', () => {
      const selector = screen.getByText(activityTags[0].name);
  
      userEvent.click(selector);
  
      const selectedFilter = screen.queryByTestId('selected-filter');
      const selectedFilterCancelButton = screen.getByRole('img');
  
      userEvent.click(selectedFilterCancelButton);
  
      const selectedFilterAfterClick = screen.queryByTestId('selected-filter');
  
      expect(selectedFilter).toBeDefined();
      expect(selectedFilterAfterClick).toBeNull();
    });  
  });
  
  describe('UI testing', () => {
    it('should render initial UI correctly', () => {
      const tree = renderer
        .create(<ActivitiesList />)
        .toJSON();
      
      expect(tree).toMatchSnapshot();
    });
  });
});
