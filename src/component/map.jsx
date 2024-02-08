import { useEffect, useState } from "react";

function Map() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then(finalRes => setData(finalRes));
    }, [])


    // const data = [{ name: 'sooraj', age: 28 }, { name: 'jass' }, { name: 'kundan' }, { name: 'anant', age: 23 }, { name: 'mansi' }];

    return <section>
       
    </section>
}

export default Map;