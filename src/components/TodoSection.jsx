import SingleTodo from './SingleTodo';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function TodoSection() {
  const { todos } = useContext(Context);
  return (
    <TodoWrapper>
      <SingleTodoWrapper>
        <Grid container>
          <Grid item xs={6}>
            <h4>Todos</h4>
          </Grid>
          <Grid item xs={3}>
            <h4 style={{ textAlign: 'center' }}>Completed</h4>
          </Grid>
          <Grid item xs={3}>
            <h4 style={{ textAlign: 'center' }}>Action</h4>
          </Grid>
        </Grid>
      </SingleTodoWrapper>
      {todos.length <= 0 && <NoTodo>No Todos on Your List!</NoTodo>}
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div``;

const SingleTodoWrapper = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px;
`;

const NoTodo = styled.h1`
  text-align: center;
  margin-top: 10px;
  color: red;
`;
