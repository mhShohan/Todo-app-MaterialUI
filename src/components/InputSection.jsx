import { Grid, TextField, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function InputSection() {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(Context);
  const handleSubmit = () => {
    const todo = { id: Date.now(), name: input, completed: false };
    addTodo(todo);
    setInput('');
  };
  return (
    <Grid container>
      <Grid item xs={9}>
        <TextField
          id="outlined-basic"
          label="Write Your todo"
          variant="outlined"
          style={{ width: '100%' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={3}
        style={{
          display: 'flex'
        }}>
        <Button
          disabled={input.length <= 5}
          variant="contained"
          style={{ width: '100%' }}
          onClick={handleSubmit}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
}
