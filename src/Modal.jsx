import React, { useContext, useRef, useState } from 'react'

import { FaTimes } from 'react-icons/fa'
import { AppContext } from './store'
export default function Modal() {



  const { showModal, closeModal
    , teacher, setTeacher,
    list, setList, isEditing,
    setIsEditing, editId, setEditId,
    alert, setAlert } = useContext(AppContext)


  const nameInputRef = useRef();
  const genderInputRef = useRef();
  const birthdayInputRef = useRef();
 
  const handleChangeInput = () =>
  {
    const enteredName = nameInputRef.current.value;
    const enteredBirthday = birthdayInputRef.current.value;
    const enteredgender = genderInputRef.current.value;
    setTeacher({ ...teacher,name: enteredName, gender: enteredgender, birthday: enteredBirthday })
    
  }
  

  

  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (teacher.name.length === 0||teacher.gender.length === 0||teacher.birthday.length === 0)
    {
      // display alert 
      setAlert(true)

    } else if (teacher && isEditing)
    {
      //deal with Edit
      setList( 
        list.map((item) =>
        {
          if (item.id === editId)
          {
            closeModal()
            return { ...item,name: teacher.name, gender: teacher.gender, birthday: teacher.birthday }
            
          }
               
          closeModal()
          return item
        })
      )
      setTeacher('')
      setEditId(null)
      setIsEditing(false)
      setAlert(false)

    } else
    {
      // add teacher 
      const newItem = { ...teacher,id: new Date().getTime().toString()}
      setList([...list, newItem])
      setTeacher({
        name: '',
      gender: '',
        birthday: ''
      })
      setAlert(false)
      closeModal()

    }

   

  }

  return (
    <div
      className={`${
        showModal ? 'modal-overlay show-modal' : 'modal-overlay'
      }  `}
    >
      <div className="modal-container">
        <div className="bg-body-secondary top-0 position-absolute w-100 d-flex justify-content-between p-2">
         
            {
              isEditing?<h4>Edit Teacher info </h4>: <h4>Add Teacher</h4>
            }
           
          
          <button className="close-modal-btn  " onClick={() => closeModal()}>
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit}>

          
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control"
              name='name'
              placeholder="Full Name"
              ref={nameInputRef}
              onChange={handleChangeInput}
              value={teacher.name}

            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="birthdate"> birth date:</label>
            <input
              className="form-control input-lg"
              type="date"
              ref={birthdayInputRef}
              onChange={handleChangeInput}
              value={teacher.birthday}
            />
           
          </div>
         
          <div className="form-group mt-3">
            <label htmlFor="gender">select gender</label>
            <select id="gender"
              className="form-control"
              ref={genderInputRef}
              onChange={handleChangeInput}
              value={teacher.gender}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="acadimicYear">Acadimic Year</label>
            <select id="acadimicYear" className="form-control">
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="governorate">select Governorate</label>
            <select id="governorate" className="form-control">
              <option value="Giza">Giza</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Mansoura">Mansoura</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="school">select school</label>
            <select id="school" className="form-control">
              <option value="Giza">Giza</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Mansoura">Mansoura</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="grade">select Grade</label>
            <select id="grade" className="form-control">
              <option value="2018">7</option>
              <option value="Cairo">6</option>
              <option value="Alexandria">5</option>
              <option value="Mansoura">4</option>
            </select>
          </div>
          <div className="mt-4 d-flex justify-content-between ">
            <button type="submit" className=" submit-btn">
              SUBMIT
            </button>
            <button type="button" className="btn" onClick={() => closeModal()}>
              Cancel
            </button>
          </div>
          {alert ? <p className='text-bg-danger mt-2'>Please Compleate All Fields !!</p>:''}
        </form>
      </div>
    </div>
  )
}
