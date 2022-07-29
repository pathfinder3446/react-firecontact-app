
import './App.css';
import InputForm from './components/form/InputForm';
import ContactTable from './components/table/ContactTable';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [gender, setGender] = useState('');
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [contactList, setContactList] = useState([]);
  const [edit, setEdit] = useState(false)

 const editContact = (e) =>{
  console.log(e);
  setName(e.name)
  setPhone(e.phone)
  setGender(e.gender)
  setId(e.id)
  setEdit(true)
 }


  return (
    <div  className="App d-flex ">
        <InputForm  
          setContactList={setContactList} 
          contactList={contactList}
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          phone={phone}
          gender={gender}
          setPhone={setPhone}
          setGender={setGender}
          id={id} />
        <ContactTable
         contactList={contactList}
         edit={edit}
          setEdit={setEdit}
          editContact={editContact}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          gender={gender}
          setGender={setGender}
         />
         <ToastContainer />
    </div>
  );
}

export default App;
