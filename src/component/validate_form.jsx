import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { signUpSchema } from "./schema/form_schema";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

function initialstate() {
    return {
      name: "",
      email: "",
      password: "",
     
      confirm_password: "",
    };
  }

const Registration = () => {
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
        name: values.name,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
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
        toast.success("record deleted successfully!");
        getdata();
      }
    } catch (error) {
      console.log("error", error.message);
      alert(error.message);
      return error;
    }
  }
  function validate() {
    if (
      values.email &&
      values.password &&
      values.name &&
      values.confirm_password
    ) {
      return true;
    } else {
      alert("please fill complete info");
      return false;
    }
  }

  // to edit entry based on current object you are getting in parameter
    async function updateRow() {
      try {
        const { status } = await axios.put(
          `http://localhost:8000/form_data/${values.id}`,
          {
            name: values.name,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
          }
        );
        if (status === 200) {
          alert("record updated successfully!");
          getdata();
          setform_Data(initialValues);
        }
      } catch (error) {
        console.log("error", error.message);
        return error;
      }
    }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit ,initialValues } =
    useFormik({
       initialValues:form_data,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        console.log("values", values);
        action.resetForm();
        // await createEntry();
        if (validate()) {
          if (values.id) {
            await updateRow();
          } else {
            await createEntry();
          } 
          getdata();
			// action.resetForm();
			setform_Data(initialstate());
        }
      },
      enableReinitialize: true,
    });
  console.log(errors);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p>{errors.confirm_password}</p>
            ) : null}
          </div>
          <div>
            <button className="input-button" type="submit">
              Registration
            </button>
          </div>
        </form>
      </div>
      <div>
        {table_data.map(function (item) {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.confirm_password}</td>

              <td>
                <button onClick={() => deleteData(item.id)}>DELETE DATA</button>
              </td>
              <td>
                <button
                      
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
      </div>
    </>
  );
};

export default Registration;
// import { useState, useEffect } from 'react';
// import { useFormik } from 'formik';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { createEmployeeData, deleteEmployeeData, getEmployeeData, updateEmployeeData } from '../api';

// // const initialValues = {
// // // id:"",
// //   name: "",
// //   designation: "",
// //   department: "",
// //   salary: "",
// //   joining_date: "",
// // };
// function ServerFormFormikYup() {
// 	const [form_data, setForm_data] = useState(initialState());
// 	const [table_data, setTable_data] = useState([]);

// 	useEffect(() => {
// 		getData();
// 	}, []);

// 	function initialState() {
// 		return {
// 			id: '',
// 			name: '',
// 			designation: '',
// 			department: '',
// 			salary: '',
// 			joining_date: '',
// 		};
// 	}

// 	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
// 		initialValues: form_data,
// 		//   validationSchema: signUpSchema,
// 		onSubmit: async (values, action) => {
// 			if (form_data.id) {
// 				await updateEntry(values);
// 			} else {
// 				await createEntry(values);
// 			}
// 			await getData();
// 			action.resetForm();
// 			setForm_data(initialState());
// 		},
// 		enableReinitialize: true,
// 	});

// 	async function getData() {
// 		const res = await getEmployeeData();
// 		console.log('res', res);
// 		if (res === undefined) {
// 			alert(res.AxiosError.message);
// 		} else if (res.status === 200) {
// 			setTable_data(res.data);
// 		}
// 		// else{
// 		// if(res.status!=200){
// 		// alert(res.message)
// 		// }
// 	}

// 	async function createEntry(form_data) {
//     try{
//       const res = await createEmployeeData(form_data);
//       console.log('res', res);
//       console.log('data', res.data);
//       if (res.status === 201) {
//         toast.success('User created successfully')
//       } else {
//         throw new Error(res.message)
//       }
//       return res;
//     } catch(error) {
//       toast.error(error.message)
//     }
// 	}

// 	async function deleteEntry(user_id) {
// 		const res = await deleteEmployeeData(user_id);
// 		console.log('res', res);
// 		if (res.status === 200) {
// 			toast.success("user deleted successfully")
// 		}
// 		getData();
// 	}

// 	async function updateEntry(form_data) {
// 		const res = await updateEmployeeData(form_data);
// 		console.log('res', res);
// 		if (res.status === 200) {
// 			alert('User updated successfully');
// 		}
// 		return res;
// 	}

// 	return (
// 		<>
// 			<form>
// 				<label for='name'>Name : </label>
// 				<input type='text' id='name' name='name' placeholder='Enter your name' value={values.name} onChange={handleChange} />
// 				<br />
// 				<br />
// 				<label for='designation'>Designation : </label>
// 				<input type='text' id='designation' name='designation' placeholder='Enter your designation' value={values.designation} onChange={handleChange} />
// 				<br />
// 				<br />
// 				<label for='Department'>Department : </label>
// 				<input type='text' id='department' name='department' placeholder='Enter your department' value={values.department} onChange={handleChange} />
// 				<br />
// 				<br />
// 				<label for='salary'>Salary : </label>
// 				<input type='text' id='salary' name='salary' placeholder='Enter your salary' value={values.salary} onChange={handleChange} />
// 				<br />
// 				<br />
// 				<label for='joining_date'>Date of Joining : </label>
// 				<input type='date' id='joining_date' name='joining_date' value={values.joining_date} onChange={handleChange} />
// 				<br />
// 				<br />
// 				<button class='btn btn-primary' type='button' onClick={handleSubmit}>
// 					Submit
// 				</button>
// 			</form>

// 			<hr />
// 			<table class='table table-bordered'>
// 				<thead class='table-dark'>
// 					<tr>
// 						<th>S. No. </th>
// 						<th>Name</th>
// 						<th>Designation</th>
// 						<th>Department</th>
// 						<th>Salary</th>
// 						<th>Date of Joining</th>
// 						<th>Delete Button</th>
// 						<th>Edit Button</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{!!table_data.length &&
// 						table_data.map((item) => {
// 							return (
// 								<tr>
// 									<td>{item.id}</td>
// 									<td>{item.name}</td>
// 									<td>{item.designation}</td>
// 									<td>{item.department}</td>
// 									<td>{item.salary}</td>
// 									<td>{item.joining_date}</td>
// 									<td>
// 										<button
// 											class='btn btn-danger'
// 											type='button'
// 											onClick={() => {
// 												deleteEntry(item.id);
// 											}}
// 										>
// 											Delete
// 										</button>
// 									</td>
// 									<td>
// 										<button
// 											class='btn btn-success'
// 											type='button'
// 											onClick={() => {
// 												setForm_data(item);
// 											}}
// 										>
// 											Edit
// 										</button>
// 									</td>
// 								</tr>
// 							);
// 						})}
// 				</tbody>
// 			</table>
// 		</>
// 	);
// }
// export default ServerFormFormikYup;