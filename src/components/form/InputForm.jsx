import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { set, ref, push, onValue, update } from "firebase/database";
import { db } from "../../utils/firebase";
import { toastSuccessNotify,toastWarnNotify } from "../../utils/customToastify";

const InputForm = ({
  setContactList,
  edit,
  setEdit,
  name,
  setName,
  phone,
  setPhone,
  gender,
  setGender,
  id,
}) => {
  const writeToDatabase = (e) => {
    e.preventDefault();
    edit
      ? UpdateUser({
          name: name,
          phone: phone,
          gender: gender,
          id: id,
        })
      : addUser();
  };

  const addUser = () => {
    const contactRef = ref(db, "Contacts");
    // console.log(contactRef);
    const newContactRef = push(contactRef);
    // console.log(newContactRef);
    set(newContactRef, {
      name: name,
      phone: phone,
      gender: gender,
    });
    // console.log(db);
    setName("");
    setPhone("");
    setGender("");
    toastSuccessNotify("You added successfully");
    setEdit(false);
  };

  useEffect(() => {
    const userRef = ref(db, "Contacts");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const contactArr = [];
      for (let id in data) {
        contactArr.push({
          id,
          ...data[id],
        });
      }
      console.log(contactArr);
      setContactList(contactArr);
    });
  }, []);

  const UpdateUser = (info) => {
    const updates = {};
    updates["Contacts/" + info.id] = info;
    console.log(info);
    setName("");
    setPhone("");
    setGender("");
    toastWarnNotify("You updated successfully");
    setEdit(false);

    return update(ref(db), updates);
  };

  return (
    <div>
      <div className="inputcontainer bg-light p-4 m-2">
        <h1 className="mb-3 text-center">ADD CONTACT</h1>
        <Form onSubmit={writeToDatabase}>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Control
                id="TextInput"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="NumberInput"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                className="input-box"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            {edit ? (
              <Button type="submit">UPDATE CONTACT</Button>
            ) : (
              <Button type="submit">ADD CONTACT</Button>
            )}
          </fieldset>
        </Form>
      </div>
    </div>
  );
};

export default InputForm;
