import { useNavigate } from 'react-router-dom';
import {CreateContext} from './CreateContext'
import React, {useContext } from 'react'
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';




export default function Student() {
const [data] = useContext(CreateContext);

    const assignValue=useNavigate();

    const addstudent=()=>{
        assignValue('/studentDesc')
    }
        return (
                <div>
                    <div className='introandAdd'>
                    <h1 className='Student_heading'>Students Details</h1>
                    <button className='Student_addStudentBtn' onClick={addstudent}>Add Student</button>
                </div>

                <div className='Student_TableInfo'> 
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow className='Table_Heading'>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Batch</TableCell>
                                    <TableCell>Change</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.Id}>
                                        <TableCell>{row.Name} </TableCell>
                                        <TableCell>{row.Age}</TableCell>
                                        <TableCell>{row.Course}</TableCell>
                                        <TableCell>{row.Batch}</TableCell>
                                        <TableCell onClick={()=>assignValue(`/studentDesc/${row.Id}`)}> <p className='changecolor' >Edit</p> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        )
    }
