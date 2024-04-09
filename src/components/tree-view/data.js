const menuData = [
  {
    label: '首页',
    to: '/home',
  },
  {
    label: '关于我们',
    to: '/about',
    children: [
      {
        label: '公司历史',
        to: '/about/history',
      },
      {
        label: '团队成员',
        to: '/about/team',
        children: [
          {
            label: '成员1',
            to: '/about/team/member1',
          },
          {
            label: '成员2',
            to: '/about/team/member2',
          },
        ],
      },
    ],
  },
  {
    label: '产品',
    to: '/products',
    children: [
      {
        label: '新品',
        to: '/products/new',
        children: [
          {
            label: '产品1',
            to: '/products/new/product1',
          },
          {
            label: '产品2',
            to: '/products/new/product2',
          },
        ],
      },
      {
        label: '热销',
        to: '/products/hot',
      },
    ],
  },
  {
    label: '服务',
    to: '/services',
    children: [
      {
        label: '售后支持',
        to: '/services/support',
      },
      {
        label: '客户服务',
        to: '/services/customer',
      },
    ],
  },
  {
    label: '联系',
    to: '/contact',
    children: [
      {
        label: '联系方式',
        to: '/contact/method',
      },
      {
        label: '在线反馈',
        to: '/contact/feedback',
      },
    ],
  },
]

export default menuData
