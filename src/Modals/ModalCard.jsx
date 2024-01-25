import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { userAdded } from '../features/posts/UserSlice'
export default function ModalCard({ open, toggle }) {
  const [selectValue, setSelectValue] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target[0].value
    let select = selectValue
    let content = e.target[2].value
    dispatch(userAdded({ title: title, select: select, content: content, }))
    toggle()
  } 

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h3>Add Post</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Header...' className='form-control my-1' />
          <select onChange={(e) => setSelectValue(e.target.value)} className='form-control my-1'>
            <option value="" hidden>Select your name</option>
            <option value="John" >John</option>
            <option value="Carla" >Carla</option>
            <option value="Chushpan" >Chushpan</option>
          </select>
          <textarea cols="30" rows="5" placeholder='Your Comment' className='form-control my-1'></textarea>
          <button className='btn btn-success'>save</button>
        </form>
      </ModalBody>
    </Modal>
  )
}
