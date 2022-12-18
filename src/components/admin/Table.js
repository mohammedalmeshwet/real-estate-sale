import axios from "axios";
import React,{useEffect, useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";




export default function Table (props) {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(props.URL).then(response =>{
            setData(response.data)   
        })
    },[])

    
    const productsGenerator = () => {

        const items = [];
        for (let i = 0; i < data.length; i++) {
            items.push({ id: data[i].id, name: data[i].name, postion: data[i].postion ,date: data[i].date});
        }
        return items;
    };


    const columns = [
        {
            dataField: "id",
            text: "Employee ID",
            sort: true
        },
        {
            dataField: "name",
            text: "Employee Name",
            sort: true
        },
        {
            dataField: "postion",
            text: "Postion"
        },
        {
            dataField: "date",
            text: "Date"
        }
    ];


    return (
        <div className="container bg-opacity-75 bg-light rounded">
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={productsGenerator()}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 5 })}
            />
        </div>
    );
}