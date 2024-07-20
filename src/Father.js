import { useState } from "react";

function Son1(props) {
  const son1Name = 'Son1'
  const { fatherName, getSon1Name } = props
  return (
    <div>
      <span>this is son1,father name:{fatherName}</span>
      <button onClick={()=>getSon1Name(son1Name)}>refresh</button>
    </div>
  )
}

function Son2({son1Name}) {
  return (
    <div>
      <div>this is son2,sonName1 name:{son1Name}</div>
    </div>
  )
}

function Father() {
  const name = 'Father';
  const [son1Name, setSon1Name] = useState();

  const getSon1Name = (name) => {
    setSon1Name(name)
  }

  return (
    <div>
      <div>this is fathor, son1 name:{son1Name}</div>
      <Son1
        fatherName={name}
        // getSonName={(sonName) => { setSonName(sonName) }}
        getSon1Name={getSon1Name}
      >
      </Son1>
      <Son2 son1Name={son1Name}></Son2>
    </div>
  );
}

export default Father;
