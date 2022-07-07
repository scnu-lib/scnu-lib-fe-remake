// this will passed by backend
export const activityTags = [
  {
    name: '阅读马拉松',
    color: 'blue',
  },
  {
    name: '旅游分享会',
    color: 'red',
  },
  {
    name: '周五影院',
    color: 'green',
  },
  {
    name: '观影沙龙',
    color: 'yellow',
  },
  {
    name: '喜阅读书会',
    color: 'teal',
  },
  {
    name: '诗会',
    color: 'violet',
  },
];

export const imgLinkStub = 'https://clean99.github.io/img/sicpjs/sicpjs.jpeg';
export const activityStub = [
  {
    title: 'string',
    register_date: '2022-04-30T00:00:00',
    start_date: '2022-05-30T00:00:00',
    end_date: '2022-06-30T00:00:00',
    img: imgLinkStub,
    description: 'this is a activity.',
    max_num_of_people: 1,
    num_of_people: 0,
    spot: 'scnu',
    tags: [activityTags[3], activityTags[4]],
    hosts: ['624e70bc1e172b1241a0b3ba'],
    is_allow_volunteer: true,
  }
];

export enum EsignUpFlag {
  irrelevant,
  participant,
  volunteer
}
