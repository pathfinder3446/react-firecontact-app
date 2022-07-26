import Table from "react-bootstrap/Table";

const ContactTable = () => {
  return (
    <div className="table-container m-2">
      <h2 className="contact-header bg-light text-center">CONTACT LIST</h2>
      <Table className="table bg-light" striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button className="bg-danger text-white">Delete</button>
            </td>
            <td>
              <button className="bg-warning">Edit</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
