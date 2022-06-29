import { render, RenderResult, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { activityTags } from '../../constants/constants';
import ActivitiesList from './index';

describe('<ActivitiesList />', () => {
  describe('Logical testing', () => {
    let root: RenderResult;

    beforeEach(() => {
      root = render(<ActivitiesList />);
    });

    describe('<ActivityFilter />', () => {
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
        const { container } = root;
        const selector = screen.getByText(activityTags[0].name);
    
        userEvent.click(selector);
    
        const selectedFilter = screen.queryByTestId('selected-filter');
        const selectedFilterCancelButton = container.getElementsByClassName('semi-icon-close');
    
        userEvent.click(selectedFilterCancelButton.item(0) as Element);
    
        const selectedFilterAfterClick = screen.queryByTestId('selected-filter');
    
        expect(selectedFilter).toBeDefined();
        expect(selectedFilterAfterClick).toBeNull();
      });  
    });  

    describe('<ActivitySearchFilter />', () => {
      it('should render search bar with placehold and search button', () => {
        screen.getByPlaceholderText('输入标题查找');
        
      });
  
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
