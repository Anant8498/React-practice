import { useEffect, useState } from "react";

function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((finalRes) => setData(finalRes));
  }, []);

  // const data = [{ name: 'sooraj', age: 28 }, { name: 'jass' }, { name: 'kundan' }, { name: 'anant', age: 23 }, { name: 'mansi' }];

  return (
    <section>
      {data.map(function (param) {
        return (
          <div>
            <h1>userID:{param.userId}</h1>
            <h2>ID:{param.id}</h2>
            <h2>Title:{param.title}</h2>
            <h2>Body:{param.body}</h2>
          </div>
        );
      })}
    </section>
  );
}
export default Map;
