import Tabs from './tabs'

function RandomTab() {
  return <h1>Random Tab</h1>
}

export default function TabTest() {
  const list = [
    {
      label: 'Tab 1',
      content: <div>Tab 1 content</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Tab 2 content</div>,
    },
    {
      label: 'Tab 3',
      content: <RandomTab />,
    },
  ]

  return <Tabs tabsContent={list} />
}
