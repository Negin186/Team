import React, { useState } from 'react'
export default function EmployeeNew() {

    const [name, setName] = useState();
    const [family, setFamily] = useState();
    const [age, setAge] = useState();

    return (
        <div>
           
            <h2>  name :{name}</h2>
            <input type='text' onChange={(e) => setName(e.target.value)}></input>
            <h2> family :{family}</h2>
            <input type='text' onChange={(e) => setFamily(e.target.value)}></input>
            <h2> age :{age}</h2>
            <input type='text' onChange={(e) => setAge(e.target.value)}></input>
            
        </div>
    )
}
