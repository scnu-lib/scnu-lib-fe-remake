import React from 'react';
import { Button, Input, Space } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';

export default function ActivitySearchFilter() {
  const [searchText, setSearchText] = React.useState('');

  return (
    <div>
      <Space>
        <Input
          prefix={<IconSearch />}
          placeholder='输入标题搜索'
          value={searchText}
          onChange={value => setSearchText(value)}
        /> 
        <Button aria-label='搜索按钮' >搜索</Button>
      </Space>
    </div>
  );
}
