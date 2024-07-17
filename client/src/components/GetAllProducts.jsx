import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../styling/getProduct.css'



export default function GetAll({data}) {
  const navigate = useNavigate();
  const handleClick = (product) => {
    console.log("Navigating with product: ", product)

    navigate('/onedetail', {state: { description: product.description, category: product.category }});
  };

  console.log("Data in GetAll: ", data); 

  return (
    <div> 
      {data.map((product)=>(
        <div key={product.id} >
            <h4 > Title :{product.title} <br />Description : {product.description} <br /> Price : {product.price} <br /> Category : {product.category} <br />
        {/* <button onClick={()=>{handleClick(product)}}>Show Details</button> */}
         </h4>
        </div>
       
      ))}
    </div>
  )
}
