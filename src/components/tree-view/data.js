const treeData = [
  {
    label: '首页',
    to: '/home',
    children: [],
  },
  {
    label: '关于我们',
    to: '/about',
    children: [
      {
        label: '公司历史',
        to: '/about/history',
        children: [],
      },
      {
        label: '团队成员',
        to: '/about/team',
        children: [],
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
            children: [],
          },
          {
            label: '产品2',
            to: '/products/new/product2',
            children: [],
          },
        ],
      },
      {
        label: '热销',
        to: '/products/hot',
        children: [],
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
        children: [],
      },
      {
        label: '客户服务',
        to: '/services/customer',
        children: [],
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
        children: [],
      },
      {
        label: '在线反馈',
        to: '/contact/feedback',
        children: [],
      },
    ],
  },
]

export default treeData
