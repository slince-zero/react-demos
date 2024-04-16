/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { FeatureFlagContext } from './context'
import LightDarkMode from '../light-dark-mode/index'
import BoardGame from '../square-game/index'
import RandomColor from '../random-color/index'
import Accordion from '../accordian/index'
import TreeView from '../tree-view/index'

export default function FeatureFlagProvider() {
  const { enabledFlags, loading } = useContext(FeatureFlagContext)

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showBordGame',
      component: <BoardGame />,
    },
    {
      key: 'showRandomColor',
      component: <RandomColor />,
    },
    {
      key: 'showAccordion',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView />,
    },
  ]

  function chackEnableFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey]
  }

  if (loading) return <div>Loading...</div>
  return (
    <>
      <h1>Feature Flag</h1>
      {componentsToRender.map((componentItem) =>
        chackEnableFlags(componentItem.key) ? componentItem.component : null
      )}
    </>
  )
}
