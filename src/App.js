
import './App.css';
import InputForm from './components/form/InputForm';
import ContactTable from './components/table/ContactTable';
import { db } from "./utils/firebase";
import { uid } from "uid";


function App() {
  return (
    <div  className="App d-flex ">
        <InputForm  />
        <ContactTable  />
    </div>
  );
}

export default App;
