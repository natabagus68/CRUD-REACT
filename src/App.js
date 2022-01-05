import './App.css';
import Table from './components/TableUsers'
import Form from './components/form/Form'
import AlertEdit from './components/AlertEdit'
import AlertDelete from './components/AlertDelete'
import {useState} from 'react';

function App() {

  const [user, setUser] = useState([
    {id:1, name: 'bagus', email: 'bagus@gmail.com'},
    {id:2, name: 'arisandi', email: 'arisandi@gmail.com'},
    {id:3, name: 'anggun', email: 'anggun@gmail.com'},
    {id:4, name: 'Budi', email:'Budi@gmail.com'}
  ]);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [index, setIndex] = useState('')
  const [edit, setEdit] = useState(false)
  const [deleted, setDeleted] = useState(false)
  




  const handleChange = (event) => {
   setName(event.target.value)
  }

  const handleChange2 = (event) => {
    setEmail(event.target.value)
   }
 
   const onsubmit = (event) => {
     event.preventDefault();
    if(index === ''){
      setUser(user => [...user, { id: user.length + 1  ,name, email}] )
      setName('')
      setEmail('')
    }else{
      user[index].id = user.id;
      user[index].name = name;
      user[index].email = email;
    
      setEmail('')
      setIndex('')
      setEdit(true)
    
      setTimeout(() => {setEdit(false)
                          setName('')}, 2000)
    }
    
   }
   
   const deleteUser = (id) => {
     let userClone = [...user]
     let filt = userClone.filter(e => {return e.id !== id})
     setUser(filt);
     setIndex('')
     setName('')
     setEmail('')
     setDeleted(true);
     setTimeout(() => {setDeleted(false)}, 2000)
   }


   const editUser = (id) => {

     let user2 = [...user]
     let index2 = user2.findIndex(e => {return e.id === id});
     setIndex(index2);
     setName(user[index2].name);
     setEmail(user[index2].email);
   }

  return (
    <div className="App">
      <>
      {edit? <AlertEdit pesan={name} /> : false }
      {deleted? <AlertDelete pesan={name} /> : false}
      </>
      
      <Table user = {user} deleteUser={deleteUser} editUser={editUser}/>
      <Form name={name} email={email} submited={onsubmit} change={handleChange} change2={handleChange2}/>
       <p>{index}</p>
    </div>
  );
}

export default App;
