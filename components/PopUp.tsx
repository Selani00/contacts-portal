import React from 'react'

const PopUp = ({ isVisible, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === 'popup-overlay') {
      onClose()
    }
  }
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ${
        isVisible ? 'block' : 'hidden'
      }`}
      id="popup-overlay"
      onClick={handleOverlayClick}
    >
      <div className="w-[600px] flex flex-col">
        <div className="bg-white p-5 rounded-lg">{children}</div>
      </div>
    </div>
  )
}

export default PopUp