import { useState, useEffect } from 'react';
import axios from 'axios';

const HttpComponent = () => {
    const [data, setData] = useState([]);

    // Using Fetch
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("Data using fetch:", data);
                setData(data);
            })
            .catch((err) => console.log("Fetch Error:", err))
    }, []);

    // Using Axios
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log("Data using axios:", res.data);
                setData(res.data);
            })
            .catch((err) => console.log("Axios Error:", err))
    }, []);

    return (
        <>
            <h4>Http Component</h4>
            <p>Total users: {data.length}</p>
        </>
    )
};

export default HttpComponent;