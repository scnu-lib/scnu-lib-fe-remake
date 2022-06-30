import { render, screen } from '@testing-library/react';
import { activityTags } from '../../constants/constants';
import { ActivityType } from '../../types/types';
import Activities from './index';

describe('<Activities />', () => {  
  it('should show empty state when data is empty', () => {
    const returnEpmtyData = jest.fn().mockReturnValue([]);
    const { container } = render(<Activities dataSource={returnEpmtyData()} />);
    const emptyState = container.getElementsByClassName('semi-empty');
    const emptyStateImg = container.getElementsByClassName('semi-empty-image');

    expect(emptyState).toHaveLength(1);
    expect(emptyStateImg).toHaveLength(1);
    expect(emptyState.item(0)).toHaveTextContent('搜索无结果');
  });

  it('should show text when dataSource have a item', () => {
    const mockDataSource = 
      [
        {
          title: 'string',
          register_date: '2022-04-30T00:00:00',
          start_date: '2022-05-30T00:00:00',
          end_date: '2022-06-30T00:00:00',
          img: 'http://www.baidu.com',
          description: 'this is a activity.',
          max_num_of_people: 1,
          num_of_people: 0,
          spot: 'scnu',
          tags: [activityTags[3], activityTags[4]],
          hosts: ['624e70bc1e172b1241a0b3ba'],
          is_allow_volunteer: true,
        }
      ];

    const { container } = render(<Activities dataSource={mockDataSource} />);
    const emptyState = container.getElementsByClassName('semi-empty');
    const list = screen.getByTestId('activity-list');
    expect(emptyState).toHaveLength(0);

    Object.values(mockDataSource[0]).forEach(value => {
      if(typeof value === 'object') 
        value.forEach(item => {
          typeof item === 'object'
            ? expect(list).toHaveTextContent(item.name)
            : expect(list).toHaveTextContent(item);
        });
      else if(typeof value !== 'boolean') 
        expect(list).toHaveTextContent(String(value));
    });
  });
});
