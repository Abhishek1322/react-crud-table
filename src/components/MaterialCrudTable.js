import React, { useState } from 'react'
import MaterialTable from 'material-table'

const empList = [
    { id: 1, name: "Abhishek", email: "abhishek@gmail.com", phone: 1235647915, city: "mohali" },
    { id: 2, name: "Manvir", email: "manvir@gmail.com", phone: 5478963245, city: "Ropar" },
    { id: 3, name: "Umesh", email: "umesh@gmail.com", phone: 5478931458, city: "kharar" },
    { id: 4, name: "john", email: "john@gmail.com", phone: 6314789524, city: "kurali" }
]

const MaterialCrudTable = () => {
    const [data, setData] = useState(empList)
    const columns = [
        { title: "ID", field: "id", },
        { title: "Name", field: "name", },
        { title: "Email", field: "email", },
        { title: "Phone Number", field: "phone number", },
        { title: "City", field: "city", },
    ]
    return (
        <>
            <div>
              
            </div>

        </>
    )
}

export default MaterialCrudTable;