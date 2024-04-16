import { useState } from 'react'
import Modal from './modal'

const CustomModalPopup = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup)
  }

  const onClose = () => {
    setShowModalPopup(false)
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>点我</button>
      {showModalPopup && (
        <Modal
          id={'custom-id'}
          onClose={onClose}
          header={<h1>Custome Header</h1>}
          body={<div>This is body</div>}
          footer={<h2>Custome footer</h2>}
        />
      )}
    </div>
  )
}

export default CustomModalPopup
