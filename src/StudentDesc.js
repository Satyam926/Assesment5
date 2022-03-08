import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CreateContext } from './CreateContext'

export default function StudentDesc() {
    const [name, setName] = useState({
        Id: '',
        Name: '',
        Age: '',
        Batch: '',
        Course: ''
    });
    const { id } = useParams();
    const [data, setData] = useContext(CreateContext);


    useEffect(() => {
        data.filter((val) => val.Id === id).map((vall) => setName(vall))




    }, [data,id])
    

    const navigation = useNavigate();

    const originalValue = (e) => {
        const start = e.target.name;
        const start1 = e.target.value;
        setName({ ...name, [start]: start1 })


    }
    const handle = (e) => {
        if (name.Name ===''|| name.Age === ''|| name.Batch=== '' || name.Course === '') {
            alert("Enter Your Details")
        }
        else {
            
            if (id!== undefined) {
                setData((prev) => prev.map((nam) => (nam.Id === id) ? {
                    'Id': id,
                    "Name": name.Name,
                    "Age": name.Age,
                    "Course": name.Course,
                    "Batch": name.Batch
                } : nam
                ))
            }
            else {
                const newinfo = { ...name, Id: `${data.length + 1}` }
                setData([...data, newinfo])

            }

        }
        navigation('/student')



    }


    return (
        <div className='forms'>
            <form >
                <label className='word_Name'>NAME : </label>
                <input id='name' type={'text'} className='word_Name_Box' onChange={originalValue} name='Name' value={name.Name} /> 

                <label className='word_Age'>AGE : </label>
                <input id='age' type={'number'} className='word_Age_Box' onChange={originalValue} name='Age' value={name.Age} /> 

                <label className='word_Batch'>BATCH : </label>
                <input id='batch' type={'text'} className='word_Batch_Box' onChange={originalValue} name='Batch' value={name.Batch} /> 

                <label className='word_Course'>COURSE : </label>
                <input id='course' type={'text'} className='word_Course_Box' onChange={originalValue} name='Course' value={name.Course} /> 

                <input type={'button'} id='button' className='submitButton' value= { id===undefined?'Submit':'Update'} 
                 onClick={handle} name='button' />

                <input type={'button'} className='cancelButton' id='button' value={'Cancel'} onClick={() => navigation('/student')} name='button' />


                



            </form>
        </div>
    )
}