"use client"
import { Button, Modal } from 'antd'
import React, { useState } from 'react'

export default function ModalButton() {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button className='text-red-500!'  onClick={()=> setOpen(true)}>open modal</Button>
         <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={open}
       
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
