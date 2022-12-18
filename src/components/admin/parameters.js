import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RowParameter from './RowParameter';
import Table from 'react-bootstrap/Table'
import FormParameter from './FormParameter';
import { Button } from 'react-bootstrap';
import { IoIosAddCircle } from 'react-icons/io';
import data from "../../local-json/parameters.json"
function Parameters() {

    const [memberInfo,setmemberInfo] = useState([]);
    const [form,setForm] = useState();
    useEffect(() =>{
        setmemberInfo(data);
        // axios.get("../../local-json/parameters.json").then(response =>{ 
        //     setmemberInfo(response.data);
        // })
        
    },[])

    const handlerDelete = (index) =>{
        const parameter = [...memberInfo]
        parameter.splice(index, 1)
        setmemberInfo(parameter)
    }

    const Edit = (index,t) => {
        const parameter = [...memberInfo]
        parameter[index] = {...t};
        setmemberInfo(parameter)
        console.log(memberInfo);
        console.log(t);
        console.log("-----------------------------");

    } 

    const handlerEdit = (index) =>{
        setForm(<FormParameter memberInfo1={memberInfo[index]} index= {index} id={memberInfo[index].id}  fun={Edit}/>);
    }

    const Add = (index,t) => {
        setmemberInfo(memberInfo => [...memberInfo,{...t}])
        console.log(memberInfo);
    } 
    
    const handlerAdd = () =>{
       
        setForm(<FormParameter index = {memberInfo.length} id={(memberInfo.length !==0 )?memberInfo[memberInfo.length-1].id+1: 1} fun={Add}/>);
    }





    const rowTable = (x) =>{
        const Rows = x.map((row,index) => <RowParameter
            key={index}
            id={row.id}
            Parameter={row.Parameter}
            value={row.value}
            delete={() => handlerDelete(index)}
            Edit={() => handlerEdit(index)}
        />)
        return Rows;
    }


    return (
        <div>
        {form !== null ? form : null}
            <Table striped bordered hover size="sm" className="container bg-opacity-75 bg-light rounded">
            <thead>
            <tr>
                <th><Button onClick={handlerAdd} className='bg-gradient my-1 w-100'><IoIosAddCircle/></Button></th>
                <th>Parameter</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {rowTable(memberInfo)}
            </tbody>
        </Table>
        </div>
    )
}

export default Parameters
