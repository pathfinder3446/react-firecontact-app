import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFilePersonFill } from "react-icons/bs";


const InputForm = () => {
  return (
    <div>

      <div className="inputcontainer bg-light p-4 m-2">
        <h1 className='mb-3 text-center'>ADD CONTACT</h1>
        <Form>
      <fieldset>
        <Form.Group className="mb-3">
          
        <Form.Control  id="TextInput" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control id="NumberInput" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Select className='input-box' placeholder='Gender'>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
      </div>
      
      
    </div>
  )
}

export default InputForm