import React ,{useState} from 'react';
import { List, ListItem, ListItemText, Button,Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Todo(props) {
    const classes=useStyles();
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState('')

    const updateTodo=()=>{
        db.collection('todos').doc(props.text.id).set({
                    todo:input
        },{merge:true})
        setOpen(false)
    }
	return (
		<React.Fragment>
			<Modal
             open={open} 
            onClose={e=>setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Edit your Todo</h1>
                    <input placeholder={props.text.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>

            </Modal>
			<List>
				<ListItem>
					<ListItemText primary={props.text.todo} secondary="Dummy Deadline🕗"></ListItemText>
				</ListItem>
                <Button onClick={e=>setOpen(true)}>EDIT</Button>
				<DeleteForeverIcon onClick={(event) => db.collection('todos').doc(props.text.id).delete()} />
			</List>
		</React.Fragment>
	);
}

export default Todo;
