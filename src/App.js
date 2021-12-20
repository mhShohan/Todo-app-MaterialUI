import { Grid } from '@mui/material';
import './styles.css';
import styled from 'styled-components';
import InputSection from './components/InputSection';
import TodoSection from './components/TodoSection';

export default function App() {
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Heading>Todo App </Heading>
        <br />
        <InputSection />
        <br />
        <TodoSection />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}

const Heading = styled.h1`
  text-align: center;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`;
