import { atom } from 'recoil';
import { activityTags } from '../constants/constants';
import {ActivityType} from '../types/types';

export const isLogin = atom({
  key: 'isLogin',
  default: false,
});

export const activityDetail = atom<ActivityType>({
  key: 'activityDetail',
  default: {
    title: 'title',
    register_date: '2022-04-30T00:00:00',
    start_date: '2022-05-30T00:00:00',
    end_date: '2022-06-30T00:00:00',
    img: 'https://clean99.github.io/img/sicpjs/sicpjs.jpeg',
    description: 'string',
    max_num_of_people: 50,
    num_of_people: 20,
    spot: 'string',
    tags: [activityTags[3], activityTags[1]],
    hosts: [],
    is_allow_volunteer: true,
  }
});
