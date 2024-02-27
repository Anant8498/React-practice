import { useEffect, useState } from "react";
import axios from "axios";

function Form_submit() {
  const [form_data, setform_Data] = useState(initialstate());
  const [table_data, settable_Data] = useState([]);

  useEffect(function () {
    getdata();
  }, []);

  // to fetch updated data from data
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

  // to create new enter
  async function createEntry() {
    try {
      await axios.post("http://localhost:8000/form_data", {
        name: form_data.name,
        position: form_data.position,
        department: form_data.department,
        salary: form_data.salary,
        hiredate: form_data.hiredate,
      });
    } catch (error) {
      console.log("error", error.message);
      return error;
    }
  }

  // to delete enter based on id you are receiving in parameter
  async function deleteData(row_id) {
    try {
      const response = await axios.delete(
        `http://localhost:8000/form_data/${row_id}`
      );

      if (response.status === 200) {
        alert("record deleted successfully!");
        getdata();
      }
    } catch (error) {
      console.log("error", error.message);
      alert(error.message);
      return error;
    }
  }

  // to edit entry based on current object you are getting in parameter
  async function updateRow() {
    try {
      const { status } = await axios.put(
        `http://localhost:8000/form_data/${form_data.id}`,
        form_data
      );
      if (status === 200) {
        alert("record updated successfully!");
      }
    } catch (error) {
      console.log("error", error.message);
      return error;
    }
  }

  function initialstate() {
    return {
      name: "",
      position: "",
      department: "",
      salary: "",
      hiredate: "",
    };
  }

  function onChangeHandler(event) {
    let key = event.target.name;
    setform_Data({ ...form_data, [key]: event.target.value });
  }

  function validate() {
    if (
      form_data.department &&
      form_data.hiredate &&
      form_data.name &&
      form_data.position
    ) {
      return true;
    } else {
      alert("please fill complete info");
      return false;
    }
  }

  async function submit() {
    if (validate()) {
      if (form_data.id) {
        await updateRow();
      } else {
        await createEntry();
      }

      setform_Data(initialstate());
      getdata();
    }
  }

  return (
    <section>
      <div className="form">
        <form autoComplete="on" />
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.name}
                  id="name"
                  name="name"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="position">Position</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.position}
                  id="position"
                  name="position"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="department">Department</label>
              </td>
              <td>
                <input
                  type="text"
                  value={form_data.department}
                  id="department"
                  name="department"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="salary">Salary</label>
              </td>
              <td>
                <input
                  type="number"
                  value={form_data.salary}
                  id="salary"
                  name="salary"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="hiredate">HireDate</label>
              </td>
              <td>
                <input
                  type="date"
                  value={form_data.hiredate}
                  id="hiredate"
                  name="hiredate"
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* {!!table_data.length &&
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
          })} */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
              <th scope="col">Hire Date</th>
              <th scope="col">Delete Button</th>
              <th scope="col">Edit Button</th>
            </tr>
          </thead>
          <tbody>
            {table_data.map(function (item) {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                  <td>{item.hiredate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(item.id)}
                    >
                      DELETE DATA
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={function () {
                        setform_Data(item);
                      }}
                    >
                      EDIT DATA
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Form_submit;
