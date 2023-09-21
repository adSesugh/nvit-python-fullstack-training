import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const memberList = [
    {
        "fname": "Justina",
        "lname": "Adole",
        "fullname": function(){
            return `${this.fname} ${this.lname}`
        },
        "gender": "Female",
        "age": 21
    },
    {
        "fname": "Innocent",
        "lname": "Precious",
        "fullname": function(){
            return `${this.fname} ${this.lname}`
        },
        "gender": "Male",
        "age": 35
    },
    {
        "fname": "Omaaka",
        "lname": "Adole",
        "fullname": function(){
            return `${this.fname} ${this.lname}`
        },
        "gender": "Male",
        "age": 28
    }
];

const App = () => {
    const [form, setForm] = useState({
        "fname": '',
        "lname": '',
        "gender": '',
        "age": 0
    });
    const [members, setMembers] = useState(memberList)

    const handleOnChange = (e) => {
        setForm({...form, [`${e.target.name}`]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setMembers(prev => [...prev, form])
        setForm({
            "fname": '',
            "lname": '',
            "gender": '',
            "age": 0
        })
    }

    useEffect(()=>{
        document.title = 'PyClass React'
    }, [])

    return (
        <div className='container'>
            <Navbar />
            <div>
                <form onSubmit={onSubmit} method='POST'>
                    <div>
                        <input type='text' name='fname' placeholder='First Name' value={form.fname} onChange={handleOnChange} />
                    </div>
                    <div>
                        <input type='text' name='lname' placeholder='Last Name' value={form.lname} onChange={handleOnChange} />
                    </div>
                    <div>
                        <input type='text' name='gender' placeholder='Gender' value={form.gender} onChange={handleOnChange} />
                    </div>
                    <div>
                        <input type='number' name='age' placeholder='Your Age' value={form.age} onChange={handleOnChange} />
                    </div>
                    <button type='submit'>Push to list</button>
                </form>
            </div>
           <hr /> 
            <h1>List of Lab % Members</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Fullname</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.fname} {member.lname}</td>
                            <td>{member.gender}</td>
                            <td>
                                {member.age >= 18 && <span>Adult</span>}
                                {member.age < 18 && <span>Teenager</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App