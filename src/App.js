
import './App.css';
import InputForm from './components/form/InputForm';
import ContactTable from './components/table/ContactTable';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [contactList, setContactList] = useState([]);

  return (
    <div  className="App d-flex ">
        <InputForm  
          setContactList={setContactList} 
          contactList={contactList} />
        <ContactTable
         contactList={contactList}
         />
         <ToastContainer />
    </div>
  );
}

export default App;
