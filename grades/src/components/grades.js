// import React, {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import img1 from './assets/school.jpg';
// import data from "./mock-data.json";


// // import { useNavigate } from "react-router-dom";


// function grades() {
//     // const navigate = useNavigate();
//     const [contacts, setContacts] = useState(data);
//     const [addFormData, setAddFormData] = useState({
//       fullName: "",
//       id: "",
//       math: "",
//       phys: "",
//       bio: ""
//     });

//     const handleAddFormChange = (event) => {
//       event.preventDefault();
  
//       const fieldName = event.target.getAttribute("name");
//       const fieldValue = event.target.value;
  
//       const newFormData = { ...addFormData };
//       newFormData[fieldName] = fieldValue;
  
//       setAddFormData(newFormData);
//     };

//     const handleAddFormSubmit = (event) => {
//       event.preventDefault();
  
//       var { nanoid } = require("nanoid");

//       const newContact = {
//         id: nanoid(),
//         fullName: addFormData.fullName,
//         id: addFormData.id,
//         math: addFormData.math,
//         phys: addFormData.phys,
//         bio: addFormData.bio
//       };
  
//       const newContacts = [...contacts, newContact];
//       setContacts(newContacts);
//     };



//   return (
//     <div>
//              <br/>
//             <div className="card widthcard justify-content-center rounded">
 
//   <div className="card-body">
//     <div className="card-title">
//     <img src={img1} className="card-img-top size" />
//     </div>
//     <div clasName="card-text">
        
// <form onSubmit={handleAddFormSubmit}>
    
//      <div className="container">
//         <div className="row">
//         <div className="col-4">
//           <label >Name:</label>
//           </div>
//           <div className="col-8">
//         <input type='text' 
//         className="form-control form-control-sm"
//         name="fullName"
//           required="required"
//           placeholder="Enter a name..."
//           onChange={handleAddFormChange}
//          />
//         </div>
//       </div>
//         </div>
// <br/>

//         <div className="container">
//         <div className="row">
//         <div className="col-4">
//           <label >ID: </label>
//           </div>
//           <div className="col-8">
       
//           <input type='text' 
//           className="form-control form-control-sm" 
//           placeholder="ID Number"
//           name="id"
//           required="required"
//           onChange={handleAddFormChange}
//           />

//         </div>
//       </div>
//         </div>

// <br/>
// <h3 className="text-muted">Grades</h3>
// <br/>


// <div className="container">
//         <div className="row">
//         <div className="col-4">
//           <label >Math: </label>
//           </div>
//           <div className="col-8">
//           <select 
//           className="form-select form-select-sm"
//           name="math"
//           required="required"
//           onChange={handleAddFormChange}>
//   <option selected>&nbsp;&nbsp;&nbsp;&nbsp; Grades</option>
//         <option value='0'>0</option>
//         <option value='1'>1</option>
//         <option value='2'>2</option>
//         <option value='3'>3</option>
//         <option value='4'>4</option>
//         <option value='5'>5</option>
//         <option value='6'>6</option>
//         <option value='7'>7</option>
//         <option value='8'>8</option>
//         <option value='9'>9</option>
//         <option value='10'>10</option>
//         <option value='11'>11</option>
//         <option value='12'>12</option>
//         <option value='13'>13</option>
//         <option value='14'>14</option>
//         <option value='15'>15</option>
//         <option value='16'>16</option>
//         <option value='17'>17</option>
//         <option value='18'>18</option>
//         <option value='19'>19</option>
//         <option value='20'>20</option>
//         </select>
//         </div>
//       </div>
//         </div>


// <div className="container">
//         <div className="row">
//         <div className="col-4">
//           <label >Physics: </label>
//           </div>
//           <div className="col-8">
//           <select 
//           className="form-select form-select-sm"
//           name="phys"
//           required="required"
//           onChange={handleAddFormChange}>
//   <option selected>&nbsp;&nbsp;&nbsp;&nbsp; Grades</option>
//         <option value='0'>0</option>
//         <option value='1'>1</option>
//         <option value='2'>2</option>
//         <option value='3'>3</option>
//         <option value='4'>4</option>
//         <option value='5'>5</option>
//         <option value='6'>6</option>
//         <option value='7'>7</option>
//         <option value='8'>8</option>
//         <option value='9'>9</option>
//         <option value='10'>10</option>
//         <option value='11'>11</option>
//         <option value='12'>12</option>
//         <option value='13'>13</option>
//         <option value='14'>14</option>
//         <option value='15'>15</option>
//         <option value='16'>16</option>
//         <option value='17'>17</option>
//         <option value='18'>18</option>
//         <option value='19'>19</option>
//         <option value='20'>20</option>
//         </select>
//         </div>
//       </div>
//         </div>


// <div className="container">
//         <div className="row">
//         <div className="col-4">
//           <label >Biology: </label>
//           </div>
//           <div className="col-8">
//           <select 
//           className="form-select form-select-sm"
//           name="bio"
//           required="required"
//           onChange={handleAddFormChange}>
//   <option selected>&nbsp;&nbsp;&nbsp;&nbsp; Grades</option>
//         <option value='0'>0</option>
//         <option value='1'>1</option>
//         <option value='2'>2</option>
//         <option value='3'>3</option>
//         <option value='4'>4</option>
//         <option value='5'>5</option>
//         <option value='6'>6</option>
//         <option value='7'>7</option>
//         <option value='8'>8</option>
//         <option value='9'>9</option>
//         <option value='10'>10</option>
//         <option value='11'>11</option>
//         <option value='12'>12</option>
//         <option value='13'>13</option>
//         <option value='14'>14</option>
//         <option value='15'>15</option>
//         <option value='16'>16</option>
//         <option value='17'>17</option>
//         <option value='18'>18</option>
//         <option value='19'>19</option>
//         <option value='20'>20</option>
//         </select>
//         </div>
//       </div>
//         </div>

// <br/>
// <div className="container">
//         <div className="row">
//         <div className="col-4">
// <button type="submit" class="btn btn-info d-flex justify-content-btween">
// <i class="fa fa-plus b" aria-hidden="true"></i>
// </button>
// </div>
// <div className="col-4"></div>
// <div className="col-4">

// <button type="button"  class="btn btn-info d-flex justify-content-btween">
// <i class="fa fa-eye b" aria-hidden="true"></i>
// </button>

// </div>
//          </div>
//          </div>
// </form>

//     </div>
   
//   </div>
// </div>

// <br/>
//             </div>
//   )
// }

// export default grades