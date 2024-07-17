import React,{useEffect,useState} from 'react';
import "./App.css";
import GetAll from "./components/GetAllProducts";
import GetDetails from './components/GetDetails';
import AddProduct from './components/AddProduct';
import Navigation from './components/Navigation';
import AddUser from './components/AddUser';

import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [data,setData]=useState([])
     useEffect(()=>{
         axios.get('http://localhost:8080/api/product/getall')
          .then((result)=>{
            // console.log(result.data)
           setData(result.data)
         })
        .catch((error)=>{console.log(error)})
     },[])

  return(
  <BrowserRouter>
      <Navigation path="/"/>
  <Routes>
    <Route path="/getall" element={ <GetAll data={data}/>} />
    <Route path="/onedetail" element={<GetDetails />} />
    <Route path="/addproduct" element={<AddProduct />} />
    <Route path="/adduser" element={<AddUser />} />


  </Routes>
  </BrowserRouter>
  )
}

export default App;
