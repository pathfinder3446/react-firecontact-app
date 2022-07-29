
import './App.css';
import InputForm from './components/form/InputForm';
import ContactTable from './components/table/ContactTable';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [contactList, setContactList] = useState([]);
  const [edit, setEdit] = useState(false)

 const editUser = () =>{
  setEdit(true)
 }


  return (
    <div  className="App d-flex ">
        <InputForm  
          setContactList={setContactList} 
          contactList={contactList}
          edit={edit}
          setEdit={setEdit} />
        <ContactTable
         contactList={contactList}
         edit={edit}
          setEdit={setEdit}
          editUser={editUser}
         />
         <ToastContainer />
    </div>
  );
}

export default App;
