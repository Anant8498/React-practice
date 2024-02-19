import BackButton from "./commom/backbutton";

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    salary: 80000,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    department: "Management",
    salary: 95000,
  },
  {
    id: 3,
    name: "Emily Johnson",
    position: "UI/UX Designer",
    department: "Design",
    salary: 75000,
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "DevOps Engineer",
    department: "Operations",
    salary: 85000,
  },
  {
    id: 5,
    name: "Sarah Davis",
    position: "Quality Assurance",
    department: "Quality",
    salary: 70000,
  },
];

function Table() {
  return (
    <section>

      <div><BackButton/></div>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>position</th>
        <th>department</th>
        <th>salary</th>
      </tr>

      {employees.map(function (item) {
      
       return <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.position}</td>
          <td>{item.department}</td>

          <td>{item.salary}</td>
        </tr>;
      })}
    </section>
  );
}

export default Table;
