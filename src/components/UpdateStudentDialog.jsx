import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"

function UpdateStudentDialog({editDialogOpen,handleDialogClose, currentStudent,handleChange, handleSaveStudent}) {
  return (
    <Dialog open={editDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Update Student</DialogTitle>
        <DialogContent>
        <TextField
            margin="dense"
            name="rollNo"
            label="Student Roll No"
            type="number"
            fullWidth
            value={currentStudent?.rollNo || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="name"
            label="Student Name"
            type="text"
            fullWidth
            value={currentStudent?.name || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="age"
            label="Student Age"
            type="number"
            fullWidth
            value={currentStudent?.age || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSaveStudent}>Save</Button>
        </DialogActions>
      </Dialog>
  )
}
export default UpdateStudentDialog