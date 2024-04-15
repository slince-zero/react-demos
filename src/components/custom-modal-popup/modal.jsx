/* eslint-disable react/prop-types */
import style from './styles.module.css'
const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || 'Modal'} className={style.modal}>
      <div className={style.content}>
        <div className={style.header}>
          <span className={style.close_modal_icon} onClick={onClose}>
            &times;
          </span>
          {header ? header : 'Header'}
        </div>
        <div className={style.body}>
          {body ? body : <p>This is our Modal body</p>}
        </div>
        <div className={style.footer}>{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  )
}

export default Modal
