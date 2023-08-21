import React, { useState, createContext,useEffect } from 'react'

export const AppContext = createContext(0)

export default function AppProvider({ children }) {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (list) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }

  const [showModal, setShowModal] = useState(false)
  const [teacher, setTeacher] = useState({
    name: '',
    gender: '',
    birthday: '',
  })

  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
    }
    useEffect(() =>
    {
      localStorage.setItem('list',JSON.stringify(list))
    },[list])

  return (
    <AppContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        teacher,
        setTeacher,
        list,
        setList,
        isEditing,
        setIsEditing,
        editId,
        setEditId,
        alert,
        setAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
