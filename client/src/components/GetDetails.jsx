import React from 'react'
import { useLocation } from 'react-router-dom'

export default function GetDetails() {
  const location = useLocation();
  console.log("Location state: ", location.state); // Debugging log

  const { description, category } = location.state || {};
  console.log("Product details: ", description, category); // Debugging log


  return (
    <div>
  <h4>{description || 'No description available'}</h4>
  <h5>{category || 'No category available'}</h5>
    </div>
  )
}
