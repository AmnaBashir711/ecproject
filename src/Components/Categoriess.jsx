import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import Card from 'react-bootstrap/Card';

export default function Categoriess() {

  const [categories,setCategories] = useState([])

useEffect(()=>{
axios.get('https://dummyjson.com/products/categories').then (json =>setCategories(json.data))

}, [])

  return (
    <div className='container'>
      <div className='my-5 text-center'>
<h1>Categories</h1>
</div>
<div className='row'>

  {
    categories.map((val,key) => 
    <div className='col-md-4 my-3' key={key}>  
  <Card>
       
          <Card.Body>
            <Card.Title>{val}</Card.Title>
            
          </Card.Body>
        </Card>
        </div>
        )
}
  </div>
  </div>
  );
    }
