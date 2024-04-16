import useWindowResize from './index'

export default function UseWindowResizeTest() {
  const windowResize = useWindowResize()
  const { width, height } = windowResize
  return (
    <div>
      <h1>Use resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  )
}
