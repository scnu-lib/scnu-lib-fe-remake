import { render } from '@testing-library/react';
import ActivityFilter from './index';

describe('<ActivityFilter />', () => {
  it('should show initial selector and filter tags', () => {
    const { getByText } = render(<ActivityFilter />);

    getByText('标签筛选：');
  });
});
