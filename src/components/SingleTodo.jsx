import styled from 'styled-components';
import { Grid, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Context } from '../context/Context';
import { useContext, useState } from 'react';
import UpdateTodoModal from './UpdateTodoModal';

export default function SingleTodo({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const { removeTodo } = useContext(Context);
  const { id, name, completed } = todo;
  return (
    <SingleTodoWrapper>
      <Grid container>
        <Grid item xs={6}>
          <h4>{name}</h4>
        </Grid>
        <Grid item xs={3}>
          <TickWrapper>{completed ? <GreenTick /> : <RedTick />}</TickWrapper>
        </Grid>
        <Grid item xs={3}>
          <BtnContainer>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => setIsEdit(true)}>
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => removeTodo(id)}>
              Delete
            </Button>
          </BtnContainer>
        </Grid>
      </Grid>
      {isEdit && <UpdateTodoModal setIsEdit={setIsEdit} todo={todo} />}
    </SingleTodoWrapper>
  );
}

const SingleTodoWrapper = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px;
`;

const BtnContainer = styled.div``;

const TickWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GreenTick = styled(CheckCircleOutlineIcon)`
  color: green;
`;
const RedTick = styled(CancelOutlinedIcon)`
  color: red;
`;
