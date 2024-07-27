import { useEffect } from "react"
import StudentTable from './StudentTable'
import '../App.css'


const StudentList = ({students,setStudents,getStudents}) => {

  useEffect(() => {
    getStudents();
}, []);
    
  return (
    <>
    <h1 style={{marginBottom:10 }}>Student List</h1>
    <StudentTable students={students} setStudents={setStudents}/>
    </>
  )
}

export default StudentList
