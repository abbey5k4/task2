import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css';
import DataCard from "./components/dataReceived/DataCard";
import 'antd/dist/antd.css';

function App() {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = React.useState(true);

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")

      // console.log(response.data);
      setData(response.data)
      setIsLoading(false);
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <DataCard isLoading = { isLoading } data = { data }/>
    </div>
  );
}

export default App;
