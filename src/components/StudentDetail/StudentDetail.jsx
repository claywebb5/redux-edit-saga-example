import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  let handleEditClick = () => {
    console.log('Edit button clicked');
    // Dispatch to store this student info in redux
    dispatch({type: 'SET_EDIT_STUDENT', payload: props.student})
    // Route to edit form, on click of edit will bring user to edit page
    history.push('/edit');
  }

  return (
    <tr>
      <td>{props.student.github_name}</td>
      <td><button onClick={handleEditClick}>Edit!</button></td>
    </tr>
  );
}

export default StudentDetail;
