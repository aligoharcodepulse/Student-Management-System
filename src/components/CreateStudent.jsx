import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import {db} from '../firebaseConfig'

const CreateStudent = ({getStudents}) => {
    const [rollNo, setRollNo] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isCreatingStudent, setIsCreatingStudent] = useState(false)
const handleSubmit = async(e) => {
    e.preventDefault()
    // console.table([name,age]);
    try {
        setIsCreatingStudent(true)
        await addDoc(collection(db,'students'),{
            name: name,
            rollNo: Number(rollNo),
            age : Number(age)
        })
        setName('')
        setRollNo('')
        setAge('')
        setIsCreatingStudent(false)
        await getStudents()
    } catch (error) {
        console.log('Error Creating User: ',error);
        setIsCreatingStudent(false)
    }
}

  return (
    <div> 
        <form onSubmit={handleSubmit} className="form">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" required/>
            <input type="number" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter Roll Number" required/> 
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" required/>
            <button type="submit">{isCreatingStudent ? 'Creating...' : 'Create Student'}</button>
        </form>
    </div>
  )
}

export default CreateStudent
