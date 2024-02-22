import { useEffect, useState } from "react";
import axios from "axios";

function Form_submit() {
  const [form_data, setform_Data] = useState(initialstate());
  const [table_data, settable_Data] = useState([]);

  useEffect(function () {
    getdata();
  }, []);

  function getdata() {
    fetch("http://localhost:8000/form_data")
      .then(function (res) {
        return res.json();
      })
      .then(function (finalres) {
        settable_Data(finalres);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function initialstate() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    };
  }
  function onChangeHandler(event) {
    let key = event.target.name;
    setform_Data({ ...form_data, [key]: event.target.value });
  }

  async function submit() {
    try {
      await axios.post("http://localhost:8000/form_data", {
        firstName: form_data.firstName,
        lastName: form_data.lastName,
        email: form_data.email,
        mobile: form_data.mobile,
      });
    } catch (error) {
      console.log("error", error.message);
      return error;
    }
    setform_Data(initialstate());
    getdata();
  }

  return (
    <section>
      <div>
        <form autoComplete="on" />
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstName">First Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.firstName}
                  id="firstName"
                  name="firstName"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="lastName">Last Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.lastName}
                  id="lastName"
                  name="lastName"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  value={form_data.email}
                  id="email"
                  name="email"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="tel">Mobile</label>
              </td>
              <td>
                <input
                  type="tel"
                  value={form_data.mobile}
                  id="tel"
                  name="mobile"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" onClick={submit}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {!!table_data.length &&
          table_data.map(function (item) {
            return (
              <>
                <div>{item.id}</div>
                <div>{item.firstName}</div>
                <div>{item.lastName}</div>
                <div>{item.email}</div>
                <div>{item.mobile}</div>
              </>
            );
          })}
      </div>
    </section>
  );
}

export default Form_submit;
