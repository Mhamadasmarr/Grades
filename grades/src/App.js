import './App.css';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, {useState} from 'react'
import img1 from './assets/school.jpg';



function App() {
 const [name, setName] = useState('')
 const [id, setId] = useState('')
 const [math, setMath] = useState('')
 const [phys, setPhys] = useState('')
 const [bio, setBio] = useState('')

 function savePerson(){
  var grades=JSON.parse(localStorage.getItem('grades') || "[]")
  var grade={
    name:name,
    id:id,
    math:math,
    phys:phys,
    bio:bio
  }
  grades.push(grade)
  localStorage.setItem('grades', JSON.stringify(grade))
 }
 
 console.log('hello');

return (
  <div>
    
           <br/>
          <div className="card widthcard justify-content-center rounded">

<div className="card-body">
  <div className="card-title">
  <img src={img1} className="card-img-top size" />
  </div>
  <div clasName="card-text">
      
<form onSubmit={savePerson}>
  
   <div className="container">
      <div className="row">
      <div className="col-4">
        <label >Name:</label>
        </div>
        <div className="col-8">
      <input type='text' 
      className="form-control form-control-sm"
      id="name"
      value={name}
        required="required"
        placeholder="Enter a name..."
        onChange={(e)=>{setName(e.target.value)}}
       />
      </div>
    </div>
      </div>
<br/>

      <div className="container">
      <div className="row">
      <div className="col-4">
        <label >ID: </label>
        </div>
        <div className="col-8">
     
        <input type='text' 
        className="form-control form-control-sm" 
        placeholder="ID Number"
        id="id"
        value={id}
        required="required"
        onChange={(e)=>{setId(e.target.value)}}
        />

      </div>
    </div>
      </div>

<br/>
<div className="container">
<div className="row">
<div className="col-4"> </div>

<div className="col-6">
<h3 className="text-muted">Grades</h3>
</div>
</div></div>
<br/>


<div className="container">
      <div className="row">
      <div className="col-4">
        <label >Math: </label>
        </div>
        <div className="col-8">
        <select 
        className="form-select form-select-sm"
        id="math"
        required="required"
        onChange={(e)=>{setMath(e.target.value)}}>
      <option value='0'>0</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
      <option value='10'>10</option>
      <option value='11'>11</option>
      <option value='12'>12</option>
      <option value='13'>13</option>
      <option value='14'>14</option>
      <option value='15'>15</option>
      <option value='16'>16</option>
      <option value='17'>17</option>
      <option value='18'>18</option>
      <option value='19'>19</option>
      <option value='20'>20</option>
      </select>
      </div>
    </div>
      </div>


<div className="container">
      <div className="row">
      <div className="col-4">
        <label >Physics: </label>
        </div>
        <div className="col-8">
        <select 
        className="form-select form-select-sm"
        id="phys"
        required="required"
        onChange={(e)=>{setPhys(e.target.value)}}>
      <option value='0'>0</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
      <option value='10'>10</option>
      <option value='11'>11</option>
      <option value='12'>12</option>
      <option value='13'>13</option>
      <option value='14'>14</option>
      <option value='15'>15</option>
      <option value='16'>16</option>
      <option value='17'>17</option>
      <option value='18'>18</option>
      <option value='19'>19</option>
      <option value='20'>20</option>
      </select>
      </div>
    </div>
      </div>


<div className="container">
      <div className="row">
      <div className="col-4">
        <label >Biology: </label>
        </div>
        <div className="col-8">
        <select 
        className="form-select form-select-sm"
        id="bio"
        required="required"
        onChange={(e)=>{setBio(e.target.value)}}>
      <option value='0'>0</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
      <option value='10'>10</option>
      <option value='11'>11</option>
      <option value='12'>12</option>
      <option value='13'>13</option>
      <option value='14'>14</option>
      <option value='15'>15</option>
      <option value='16'>16</option>
      <option value='17'>17</option>
      <option value='18'>18</option>
      <option value='19'>19</option>
      <option value='20'>20</option>
      </select>
      </div>
    </div>
      </div>

<br/>
<div className="container">
      <div className="row">
      <div className="col-4">
<button type="submit" className="btn btn-info d-flex justify-content-btween">
<i className="fa fa-plus b" aria-hidden="true"></i>
</button>
</div>
<div className="col-4"></div>
<div className="col-4">

<button type="button"  className="btn btn-info d-flex justify-content-btween">
<i className="fa fa-eye b" aria-hidden="true"></i>
</button>

</div>
       </div>
       </div>
</form>

  </div>
 
</div>
</div>

<br/>
          </div>
);
}

export default App;
