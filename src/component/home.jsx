import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Home page</h2>
      <ul>
        <li><Link to={"/form"}>Form</Link></li>
        <li><Link to={"/form2"}>Form2</Link></li>
        <li><Link to={"/form3"}>Form3</Link></li>
        
        <li><Link to={"/userdata"}>User data</Link></li>
        <li><Link to={"/carddelete"}>Carddelete</Link></li>
        <li><Link to={"/cardauthor"}>Cardauthor</Link></li>
        <li><Link to={"/table"}>Table</Link></li>
        <li><Link to={"/localdata"}>localdata</Link></li>

      </ul>
    </section>
  );
}

export default Home;
