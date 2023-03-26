import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import axios from 'axios';
import { useEffect } from 'react';

const APIURL = "https://fakestoreapi.com/products";

function App() {
  const [user, setUser] = useState([]);

  const ProfileData = async () =>{
    const GetData = await axios.get(APIURL);
    setUser(GetData.data);
    console.log(GetData.data)
  }

  useEffect(() => {
     ProfileData()
  },[]);
  return (
    <div className="App">
    <Navbar />
    <h2 className='text-center mt-2 bg-success w-25 text-white m-auto rounded'>Choose Best Products</h2>
    <Card userData={user} />
    </div>
  );
}
export default App;