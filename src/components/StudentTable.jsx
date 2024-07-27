import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState } from 'react';
import {updateDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig';
import UpdateStudentDialog from './UpdateStudentDialog';

export default function StudentTable({students,setStudents}) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  // update student
  function handleUpdateStudent(studentId){
    const student = students.find((s) => s.id === studentId);
    setCurrentStudent(student);
    setEditDialogOpen(true);
  }

  async function handleSaveStudent() {
    const studentDoc = doc(db, 'students', currentStudent.id);
    await updateDoc(studentDoc, {
      rollNo: currentStudent.rollNo,
      name: currentStudent.name,
      age: currentStudent.age,
    });
    setStudents(
      students.map((student) =>
        student.id === currentStudent.id ? currentStudent : student
      )
    );
    handleDialogClose();
  }

  // delete student
  async function handleDeleteStudent(studentId) {
    const studentDoc = doc(db, 'students', studentId);
    await deleteDoc(studentDoc);
    setStudents(students.filter((student) => student.id !== studentId));
  }

  function handleDialogClose() {
    setEditDialogOpen(false);
    setCurrentStudent(null);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCurrentStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Student RollNo</TableCell>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center">Student Age</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
            key={student.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row" align='center'>
                {student.rollNo}
              </TableCell>
              <TableCell scope="row" align='center'>
                {student.name}
              </TableCell>
              <TableCell scope="row" align='center'>
                {student.age}
              </TableCell>
              <TableCell scope="row" align='center'>
                <EditIcon onClick={()=>handleUpdateStudent(student.id)} style={{cursor:'pointer',marginRight:10, color:'#007bff'}}/>
                <DeleteIcon onClick={()=>handleDeleteStudent(student.id)} style={{cursor:'pointer',marginRight:10,color:'crimson'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <UpdateStudentDialog 
    editDialogOpen={editDialogOpen} 
    handleDialogClose={handleDialogClose} 
    currentStudent={currentStudent} 
    handleChange={handleChange} 
    handleSaveStudent={handleSaveStudent}/>
    </>
  );
}
