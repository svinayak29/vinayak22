import React,{useState} from "react";


const Drop = () => {

  const[value,setValue] = useState('fruit');
  
  const handleChange = (event) =>{
     setValue(event.target.value);
  }
  return(
   <div className="Down">
     <label>
       <select value ={value} onChange = {handleChange}>
         
         <option value = "fruit">Fruit</option>
         <option value = "vegetable">Vegetable</option>
         <option value = "Egg">Egg</option>
         
          </select>

     </label>
     <p style = {{color : 'red', fontSize : 15}}> we eat {value}</p>
   </div>
  );
}

export default Drop;
