import axios from "axios"
import React,{useState} from "react"
import '../styling/login.css'

export default function AddProduct() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0)
    const [category,setCategory] = useState('')
    const [image,setIamge] = useState(null)


    const add = ()=> {
        axios.post('http://localhost:8080/api/product/post')
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const uploadImage = ()=> {
      const form = new FormData()
      form.append('image', image)
       form.append('dmv4km71s','asslelabed93')
    }

  return (
    <div className="login-container">
      Title : 
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
      <br />
      Description :
      <input type="text" onChange={(e)=>{setDescription(e.target.value)}} />
      <br />
      Price :
      <input type="text" onChange={(e)=>{setPrice(e.target.value)}} />
      <br />
      Category : 
      <input type="text" onChange={(e)=>{setCategory(e.target.value)}} />
      <button onClick={()=>{add()}}>Confirm</button>
      <br />
      Image : 
      <input type="file" onChange={(e)=>{setIamge(e.target.files[0])}} />
      <br />
      <button>Upload</button>
    </div>
  )
}
