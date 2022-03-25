import React from 'react'
import Table from './Table'

function Modifications() {
    const URL = "http://localhost:3000/Modifications.json"
    return (
        <div>
        <Table URL={URL}/>
        </div>
    )
}

export default Modifications
