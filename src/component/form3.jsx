import { useState } from "react";

function Form3() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phnumber: ""
    
  });

  // function firstNameOnChangeHandler(event) {
  //     setData({...data, firstName: event.target.value })
  // }

  // function lastNameOnChangeHandler(event) {
  //     setData({ ...data, lastName: event.target.value })
  // }

  function onChangeHandler(event) {
    let key = event.target.name;

    setData({ ...data, [key]: event.target.value });
  }
  // function phnumber(event){
  //     setData({...data,phnumber:event.target.value})
  // }

  function submit() {
    console.log("data", data);
  }

  return (
    <form>
      <label>First name</label>
      <input
        type="text"
        value={data.firstName}
        name="firstName"
        onChange={onChangeHandler}
      ></input>
      <br />
      <label>Last name</label>
      <input
        type="text"
        value={data.lastName}
        name="lastName"
        onChange={onChangeHandler}
      ></input>
      <br />

      <label>phone Number</label>
      <input
        type="tel"
        value={data.phnumber}
        name="phnumber"
        onChange={onChangeHandler}
      />
      <br />
      <button type="button" onClick={submit}>
        Submit
      </button>
    </form>
  );
}

export default Form3;
