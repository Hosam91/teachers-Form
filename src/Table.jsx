import React, { useContext } from 'react'
import Modal from './Modal'
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'
import { AppContext } from './store'

export default function Table()
{
  

  const { openModal,list,alert, setAlert,setList,setIsEditing ,setEditId,setTeacher} = useContext(AppContext)

 
  const handleDelete = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId)
    setList(updatedList)
  }
  const handeldit = (itemId) => {
    const myItem = list.find((item) => item.id === itemId)
    setIsEditing(true)
    setEditId(itemId)
    setTeacher(myItem)
    openModal()
    
  }
 
  return (
    <>
      <Modal />

      <div className="section-center ">
        <div className=" d-flex w-50 ">
          <button className='  submit-btn fw-bold ' onClick={()=>openModal()}>ADD </button>
        
        </div>
        
        <table className="table mt-4  border text-center  shadow-lg">
          <thead className="bg-light text-capitalize p-3 ">
            <th>control</th>
            <th>Gender</th>
            <th>birth date</th>
            <th>name</th>
          </thead>
          <tbody>
            {
              list.length === 0 ?<td><p className='text-bg-dark w-100 text-center text-capitalize'> ther is no teachers yet !!</p></td>:
            list.map((item) =>
              {
                const { id, name, gender, birthday } = item
                return    <tr key={id}>
                  <td>
                    <button className="delete-btn" onClick={()=>handleDelete(id)}>
                        <FaTrash className='edit-icon' />
                    </button>
                    <button className="edit-btn" onClick={()=>handeldit(id)}>
                        <FaEdit  className='edit-icon'/>
                    </button>
                 </td>
                  <td>{gender}</td>
                  <td>{birthday}</td>
                  <td>{name}</td>
                  </tr>
                
              })}
            
            
          </tbody>
        </table>
       
       
      </div>
    </>
  )
}
