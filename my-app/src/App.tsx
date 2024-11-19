import React from 'react';
import './App.css';
import { Node } from 'typescript';

let name:string;
let age:number;
let address:[number,string];
// for object 
type Address={
  doorNo:number,
  streetName:string,
  district:string,
  pin:number,
  state?:string
}

name="hari";
age=28;
address= [174,'Sripathy Nagar']
let fullAddress:Address={
  doorNo:174,
  streetName:"Sripathy Nagar",
  district:"Coimbatore",
  pin:641036,
}


// Typescript functoin type is React.FC or 
const App: React.FC =()=>{
 
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
