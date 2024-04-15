/* eslint-disable react/prop-types */
import style from './styles.module.css'
export default function UserCard({ userData }) {
  return (
    <div className={style.userCard}>
      <img src={userData.avatar_url} alt={userData.name} />
      <div className={style.info}>
        <h2>username:{userData.login}</h2>
        <p>repo: {userData.public_repos}</p>
        <a href={userData.html_url}>home</a>
      </div>
    </div>
  )
}
