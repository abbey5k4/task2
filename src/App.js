import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css';
import DataCard from "./components/dataReceived/DataCard";

function App() {
  const [ data, setData ] = React.useState([]);
  const [ isLoading, setIsLoading ] = React.useState(true);

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")

      console.log(response.data);
      setData(response.data)
      setIsLoading(false);
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <DataCard isLoading = { isLoading } data = { data } />
    </div>
  );
}

export default App;
