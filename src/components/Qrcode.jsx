import React from 'react'

export default function qrcode() {
  return (
    <div >
      <div className=' bg-white max-w-sm p-4 rounded-lg'>
        <div className="">
          <img src="../images/image-qr-code.png" className=' rounded-lg' />
        </div>
          <h1 className='font-bold p-3 text-2xl ml-4'>Improve your front-end skills by building projects</h1>
          <p className='text-gray-600 p-3'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}
