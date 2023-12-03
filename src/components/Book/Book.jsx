/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Book.css'
import {useNavigate} from 'react-router-dom'

function Book({book}) {
  const navigate=useNavigate()
 const [edit,setEdit]=useState(false)
 const [data,setData]=useState({
      bookName:book.bookName,
      isbnNo:book.isbnNo,
      cat:book.cat,
      rowNo:book.rowNo,
      count:book.count,
      cost:book.cost,
      availability:book.availability,
})
const handleChange=(e)=>{
  console.log(e.target.name);

 setData({...data,[e.target.name]:e.target.value})
}
  const handleEdit=()=>{
    setEdit(true)
  }

  const handleRemove=()=>{
    alert('The item will be removed !!')
    let myBooks=JSON.parse(sessionStorage.getItem('books'))
    sessionStorage.setItem('books',JSON.stringify(myBooks.filter(myBook=>book.isbnNo!=myBook.isbnNo)))
    location.reload()
  }
  
  const handleSave=()=>{
    let myBooks=JSON.parse(sessionStorage.getItem('books'))
    sessionStorage.setItem('books',JSON.stringify(myBooks.filter(myBook=>book.isbnNo!=myBook.isbnNo)))
    myBooks=JSON.parse(sessionStorage.getItem('books'))
     myBooks.push(data)
     sessionStorage.setItem('books',JSON.stringify(myBooks))
     location.reload()
  }

  return (
    <div className="book"  >
  <div className="card-body ">
    <h2 className="card-title" onClick={()=>navigate('/show-book',{state:{isbn:book.isbnNo}})}>{book.bookName}</h2>
    <p className="mb-2 ">ISBN: {book.isbnNo}</p>
    {/* <p className="mb-2 ">Category: {book.cat}</p> */}
    <div className='info'>
      <label htmlFor="cat">Category: </label>&nbsp;
      <input type="text" name="cat" id="cat" value={data.cat} readOnly={edit?false:true} onChange={handleChange}/>
    </div>
    <div className='info'>
    <label htmlFor="row">Row No: </label>&nbsp;
      <input type="number" name="rowNo" id="row" value={data.rowNo} readOnly={edit?false:true} onChange={handleChange}/>
    </div>
    {/* <p className="mb-2 ">Row: {data.rowNo}</p> */}
    {/* <p className="mb-2 ">Count: {data.count}</p> */}
    <div className='info'>
    <label htmlFor="count">Count: </label>&nbsp;
      <input type="number" name="count" id="count" value={data.count} readOnly={edit?false:true} onChange={handleChange}/>
    </div>
    {/* <p className="mb-2 ">Cost: {data.cost}</p> */}
    <div className='info'>
    <label htmlFor="cost">Cost: </label>&nbsp;
      <input type="number" name="cost" id="cost" value={data.cost} readOnly={edit?false:true} onChange={handleChange}/>
    </div>
    {/* <p className="mb-2 ">Available: {data.availability}</p> */}
    <div className='info'>
    <label htmlFor="avail">Available: </label>&nbsp;
      <input type="text" name="avail" id="avail" value={data.availability} readOnly={edit?false:true} onChange={handleChange}/>
    </div>
    </div>
    <div className="ops" onClick={(e)=>e.stopPropagation()}>
      {edit?<span className='text-success' onClick={handleSave}>Save</span>:<span className='text-primary' onClick={handleEdit}>Edit</span>}
      <span className='text-danger' onClick={handleRemove}>Remove</span>
    </div>
</div>
  )
}

export default Book