import './App.css'
import Table from './Table'
import Modal from './Modal'
import  AppProvider  from './store'
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <>
      <AppProvider>
        <Table/>
        <Modal />
      </AppProvider>
    </>
  )
}

export default App
