import { useEffect, useState } from "react";

function Localdata() {
  const [data, setdata] = useState([]);

  useEffect(function () {
    fetch("http://localhost:8001/data")
      .then(function (res) {
        return res.json();
      })
      .then(function (finalRes) {
        setdata(finalRes);
      })
      .catch(function(error){
        console.log(error.message)
      })

  }, []);

  return (
  <section>{data.map(function(item){ return(
  <><div>{item.id}</div><div>{item.name}</div><div>{item.salary}</div><div>{item.position}</div></>)})}
  </section>)
   
}

export default Localdata;
