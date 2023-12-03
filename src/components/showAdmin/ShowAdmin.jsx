import { useEffect, useState } from "react"
import Book from "../Book/Book"
import './ShowAdmin.css'

function ShowAdmin() {
  const [books,setBooks]=useState([])
  const [search,setSearch]=useState({
    name:'',
    isbn:''
  })
  useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem('books')))
    {let myBooks=JSON.parse(sessionStorage.getItem('books'))
    setBooks(myBooks)}
  },[])

  const handleChange=(e)=>{
     setSearch({...search,[e.target.name]:e.target.value})
  }

  const handleSearch=()=>{
     setBooks(books.filter(book=>{
      if(search.name!=='' && search.isbn=='')
        return book.bookName.includes(search.name)
      else if(search.name=='' && search.isbn!=='')
       return book.isbnNo==search.isbn
      else if(search.name!=='' && search.isbn!=='')
       return book.bookName.includes(search.name) && book.isbnNo==search.isbn 
       
     }))
  }

  return (
    <div className="show-books ">
      <h1 className="text-center">Books</h1>
      <div className="search">
        <input type="text" name="name" id="name" className="" placeholder="enter name" value={search.name} onChange={handleChange} />
        <input type="number" name="isbn" id="isbn" className="" placeholder="enter isbn no." value={search.isbn} onChange={handleChange}/>
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
      <main> 
      {books.length>0?books.map((book)=><Book book={book} key={book.isbnNo}/>):<h1 className="text-muted">Book shelf is empty !!</h1>}
      </main>
      
    </div>
  )
}

export default ShowAdmin