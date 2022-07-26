import Table from "react-bootstrap/Table";
import { FiDelete } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";

const ContactTable = () => {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td className="text-center">
              <button className=" btn-del bg-danger text-white">Delete</button>
            </td>
            <td className="text-center">
              <AiFillEdit className="edit-icon" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
