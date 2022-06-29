import React from 'react';
import { Input } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';

export default function ActivitySearchFilter() {
  return (
    <div><Input prefix={<IconSearch />} placeholder='输入标题查找' /></div>
  );
}
