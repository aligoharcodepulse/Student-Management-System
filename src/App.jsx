import { collection, getDocs } from 'firebase/firestore'
import './App.css'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import { useState} from 'react'
import { db } from './firebaseConfig'

function App() {

  const [students, setStudents] = useState([])
  
  const getStudents = async() => {
    try {
      const studentsCollection = collection(db,'students')
      const studentSnapshot = await getDocs(studentsCollection)
      const studentList = studentSnapshot.docs.map(doc => (
      {
          id: doc.id,
          ...doc.data()
      }
      
  ))
  //console.log('asdf');
  setStudents(studentList)
    } catch (error) {
      console.log(error);
    }
    
}
  
  return(
    <div className='appContainer'>
      <h1 className='appTitle'>Student Management System</h1>
      <CreateStudent getStudents={getStudents}/>
      <StudentList students={students} setStudents={setStudents} getStudents={getStudents}/>
    </div>
  )

}

export default App
