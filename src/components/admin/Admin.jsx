import { useState ,useId} from 'react'
import './Admin.css'


function Admin() {

const id=useId()  
console.log(id)
  const [book,setBook]=useState({
    bookName:'',
        isbnNo:'',
        cat:'',
        rowNo:'',
        count:'',
        cost:'',
        availability:'',
        _id:id
  })

  

  
 const [error,setError]=useState(false)
 const [success,setSuccess]=useState(false)

  const handleChange=(e)=>{
   const name= e.target.name 
   const value= e.target.value
   setBook({...book,[name]:value})
  }

  const handleSubmit=(e)=>{
     e.preventDefault()

     for(let key in book){
      if(book[key]==='')
       {
        setError(true)
        setTimeout(()=>setError(false),1000)
        return
       }
     }

    
     let books=JSON.parse(sessionStorage.getItem('books'))
     
     books.push(book)
     sessionStorage.setItem('books',JSON.stringify(books))
     setBook(
      {
        bookName:'',
            isbnNo:'',
            cat:'',
            rowNo:'',
            count:'',
            cost:'',
            availability:'',
            _id:''
      }
     )
    setSuccess(true)
    setTimeout(()=>setSuccess(false),1000)
  }


  return (
    <div className="admin">
      <h1 className='text-center'>Admin page</h1>
      <h4 className='text-muted text-center'>Add books to the shelf...</h4>
      {error && <p className='text-center text-danger'>All values required...</p>}
      {success && <p className='text-center text-success'>Book Added !!</p>}
      <form className='admin-form' >
  <div className="form-group " >
    <label htmlFor="book-name">Enter Book Name:</label>
    <input type="text" className="form-control" id="book-name" aria-describedby="name" name='bookName' value={book.bookName} placeholder="Enter name" onChange={handleChange} required/>
    </div>
  <div className="form-group">
    <label htmlFor="isbn-no">ISBN No:</label>
    <input type="number" className="form-control" id="isbn-no" placeholder="isbn Number" name='isbnNo' value={book.isbnNo} onChange={handleChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="cat">Category:</label>
    <input type="text" className="form-control" id="cat" placeholder="category" name='cat' value={book.cat} onChange={handleChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="row">Row No:</label>
    <input type="number" className="form-control" id="row" placeholder="Row Number" name='rowNo' value={book.rowNo} onChange={handleChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="count">Count:</label>
    <input type="number" className="form-control" id="count" placeholder="Book count" name='count' value={book.count} onChange={handleChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="cost">Cost:</label>
    <input type="number" className="form-control" id="cost" placeholder="Book Cost" name='cost' value={book.cost} onChange={handleChange} required/>
  </div>
  <div className="form-group">
    <label htmlFor="avail">Availability(yes/no):</label>
    <input type="text" className="form-control" id="avail" placeholder="type yes or no" name='availability' value={book.availability} onChange={handleChange} required/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add book</button>
</form>
    </div>
  )
}

export default Admin