import useLocalStroage from './useLocalStroage'
import styles from './styles.module.css'

function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage('theme', 'dark')

  function handleChangeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  console.log(theme)
  return (
    <div className={styles.container}>
      <p>Hello World!</p>
      <button onClick={handleChangeTheme}>切换主题</button>
    </div>
  )
}

export default LightDarkMode
