import { render, screen } from '@testing-library/react';
import { activityStub, imgLinkStub } from '../../constants/constants';
import Activities from './index';

describe('<Activities />', () => {  
  it('should show empty state when data is empty', () => {
    const returnEpmtyData = jest.fn().mockReturnValue([]);
    const { container } = render(<Activities selectedTags={[]} dataSource={returnEpmtyData()} />);
    const emptyState = container.getElementsByClassName('semi-empty');

    expect(emptyState).toHaveLength(1);
    expect(container.getElementsByClassName('semi-empty-image')).toHaveLength(1);
    expect(emptyState.item(0)).toHaveTextContent('搜索无结果');
  });

  it('should show text when dataSource have a item', () => {
    const { container } = render(<Activities selectedTags={[]} dataSource={activityStub} />);
    const list = screen.getByTestId('activity-list');

    expect(container.getElementsByClassName('semi-empty')).toHaveLength(0);
    expect(screen.getByAltText('activity img')).toBeDefined();

    Object.values(activityStub[0]).forEach(value => {
      if(typeof value === 'object') 
        value.forEach(item => {
          typeof item === 'object'
            ? expect(list).toHaveTextContent(item.name)
            : expect(list).toHaveTextContent(item);
        });
      else if(typeof value !== 'boolean' && value !== imgLinkStub) 
        expect(list).toHaveTextContent(String(value));
    });
  });
});
