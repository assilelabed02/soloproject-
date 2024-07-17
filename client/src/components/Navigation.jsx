import React from 'react'
import { Link } from 'react-router-dom';
import '../styling/nav.css'


export default function Navigation() {
  return (
    <div>
       <nav>
            <ul>
                <li>
                    <Link to="/getall">Home</Link>
                </li>
                <li>
                    <Link to="/addproduct">Add Product</Link>
                </li>
                <li>
                    <Link to="/adduser">Login</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
