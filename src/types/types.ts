import { activityTags } from '../constants/constants';

export interface ActivityType {
  title: string;
  register_date: string;
  start_date: string;
  end_date: string;
  img: string;
  description: string;
  max_num_of_people: number;
  num_of_people: number;
  spot: string;
  tags: typeof activityTags;
  hosts: string[];
  is_allow_volunteer: boolean;
};

export type activityTagsType = typeof activityTags;
