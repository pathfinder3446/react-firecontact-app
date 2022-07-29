import Table from "react-bootstrap/Table";
import { AiFillEdit } from "react-icons/ai";
import {  ref, remove } from 'firebase/database';
import { db } from "../../utils/firebase";
import { useState } from "react";
import {toastSuccessNotify} from '../../utils/customToastify';

const ContactTable = ({contactList, edit, setEdit}) => {
  const [editInfo, setEditInfo] = useState({});

  const deleteContact = (id) => {
    remove(ref(db, 'Contacts/' + id))
    toastSuccessNotify('You deleted successfully');
   
  };

const editContact = (contact) =>{
  setEdit(true);
  setEditInfo({
    name: contact.name,
    phone: contact.phone,
    gender: contact.gender,
    id: contact.id
  })

}


  return (
    <div className="table-container m-2">
      <h2 className="contact-header bg-light text-center">CONTACT LIST</h2>
      <Table className="table bg-light" striped>
        <thead >
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th className="text-center">Delete</th>
            <th className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>        
            {contactList.map((contact, id) =>{
            return (
              <tr key={id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.gender}</td>
            <td className="text-center">
              <button 
              onClick={() => deleteContact(contact.id)} 
              className=" btn-del bg-danger text-white">Delete</button>
            </td>
            <td className="text-center">
              <AiFillEdit 
              onClick={()=> editContact(contact)} 
              className="edit-icon" />
            </td>
          </tr>
            )
          })}
          )
          
          
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
