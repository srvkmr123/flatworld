
import { useEffect } from 'react'
import './App.css'
import Admin from './components/admin/Admin'
import ShowAdmin from './components/showAdmin/ShowAdmin'
import ShowBook from './components/showBook/ShowBook'
import {Routes, Route} from 'react-router-dom'


function App() {
  useEffect(()=>{
    if(!sessionStorage.getItem('books'))
    sessionStorage.setItem('books','[]')
  },[])
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={< ><Admin/></>}/>
        <Route path='/show-admin' element={<><ShowAdmin/></>}/>
        <Route path='/show-book' element={< ><ShowBook/></>}/>
      </Routes>
    </div>
  )
}

export default App
