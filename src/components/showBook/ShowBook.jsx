/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom'
import './ShowBook.css'
import { useEffect, useState } from 'react'
import Qrcode from '../Qrcode'

function ShowBook() {
  const location=useLocation()
  const [book,setBook]=useState(null)
  useEffect(()=>{
    if(location.state.isbn){
      let myBook=JSON.parse(sessionStorage.getItem('books')).find(book=>book.isbnNo===location.state.isbn)
      setBook(myBook)
    }
  },[location.state.isbn])
  return (
    <>
    {
    book?(<div className="show-book" >
    <h1 className='text-center'>{book.bookName}</h1>
  <div className="card-body mb-5">
    
    <p className="mb-2 ">ISBN: {book.isbnNo}</p>
    <p className="mb-2 ">Category: {book.cat}</p>
    <p className="mb-2 ">Row: {book.rowNo}</p>
    <p className="mb-2 ">Count: {book.count}</p>
    <p className="mb-2 ">Cost: {book.cost}</p>
    <p className="mb-2 ">Available: {book.availability}</p>
    </div>
    <Qrcode/>
</div>):null
  }
    </>
  )
}

export default ShowBook