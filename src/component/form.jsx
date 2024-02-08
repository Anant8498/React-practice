import { useState } from "react";

function Form() {
  const [data, setdata] = useState(initialstate());

  function initialstate() {
    return {
      firstname: "",
      lastname: "",
      age: "",
      phonenumber: "",
      address: { hno: "", area: "", pincode: "" },
    };
  }

  function onchangehandler(event) {
    let key = event.target.name;
    if (key === "pincode" || key === "hno" || key === "area") {
      setdata({
        ...data,
        address: { ...data.address, [key]: event.target.value },
      });
    } else setdata({ ...data, [key]: event.target.value });
  }

  function submit() {
    console.log("data", data);
    setdata(initialstate());
  }

  return (
    <>
      <h1>REGISTRATION FORM</h1>
      <form>
        <label htmlFor="firstname">firstname:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={data.firstname}
          onChange={onchangehandler}
        />
        <br />
        <label htmlFor="lastname">lastname:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={data.lastname}
          onChange={onchangehandler}
        />
        <br />

        <label htmlFor="age">age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={data.age}
          onChange={onchangehandler}
        />
        <br />
        <label htmlFor="phonenumber">phonenumber:</label>
        <input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          value={data.phonenumber}
          onChange={onchangehandler}
        />
        <br />
        <label htmlFor="firstname">Address:</label>
        <input
          placeholder="hno"
          type="text"
          id="hno"
          name="hno"
          value={data.address.hno}
          onChange={onchangehandler}
        />

        <input
          placeholder="area"
          type="text"
          id="area"
          name="area"
          value={data.address.area}
          onChange={onchangehandler}
        />

        <input
          placeholder="pincode"
          type="text"
          id="pincode"
          name="pincode"
          value={data.address.pincode}
          onChange={onchangehandler}
        />
        <br />
        <button type="button" onClick={submit}>
          submit
        </button>
      </form>
    </>
  );
}

export default Form;
