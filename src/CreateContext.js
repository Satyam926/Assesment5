import React, { createContext, useState } from 'react'

export const CreateContext = createContext();

export const Studentprovide = (props) => {
    const [data, setData] = useState([
        { "Id": "1",    "Name": "Satyam",   "Age": "22",    "Course": "MERN",   "Batch": "September" },
        { "Id": "2",    "Name": "Shivam",   "Age": "23",    "Course": "MEAN",   "Batch": "September" },
        { "Id": "3",    "Name": "Bhagyesh",   "Age": "24",    "Course": "MERN",   "Batch": "September" },
        { "Id": "4",    "Name": "Ravi",   "Age": "25",    "Course": "MERN",   "Batch": "September" },
        { "Id": "5",    "Name": "Ramesh",   "Age": "26",    "Course": "MEAN",   "Batch": "September" }

        ])

    return (
        <CreateContext.Provider value={[data, setData]}>
            {props.children}
        </CreateContext.Provider>
    )
}
