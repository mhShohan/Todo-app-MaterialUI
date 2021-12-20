import { Grid, TextField, Checkbox, Button } from '@mui/material';
import styled from 'styled-components';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function UpdateTodoModal({ setIsEdit, todo }) {
  const [input, setInput] = useState(todo.name);
  const [isChecked, setIsChecked] = useState(todo.completed);
  const { updateTodo } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({ id: todo.id, name: input, completed: isChecked });
    setIsEdit(false);
  };
  return (
    <Modal>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <form onSubmit={handleSubmit}>
            <h2>Update Todo</h2>
            <TextField
              id="outlined-basic"
              label="Update Your todo"
              value={input}
              variant="outlined"
              style={{ width: '100%' }}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="checkBoxSection">
              <h3>Completed:</h3>{' '}
              <Checkbox
                defaultChecked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
            </div>
            <Button variant="contained" style={{ width: '100%' }} type="submit">
              Update
            </Button>
            <CloseButton onClick={() => setIsEdit(false)} />
          </form>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all ease 1s;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  form {
    background: #b1d0e0;
    border-radius: 6px;
    margin: 0 50px;
    padding: 100px 20px;
    position: relative;

    .checkBoxSection {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      margin: 20px 0;
    }
  }
`;

const CloseButton = styled(CancelOutlinedIcon)`
  color: red;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
