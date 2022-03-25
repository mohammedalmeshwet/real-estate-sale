import React from 'react'
import Table from './Table'

function Additions() {
    const URL = "http://localhost:3000/Additions.json"
    return (
        <Table URL={URL}/>
    )
}

export default Additions
