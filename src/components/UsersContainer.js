import React from 'react';
import {connect} from "react-redux";
import {setUsers, setInProgress} from '../redux/users-reducer';
import Button from './Button';
import {UsersAPI} from '../api/UsersAPI';

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log("UsersContainer componentDidMount")
  }
  onClick = () => {
    //TODO: ONLY when using reducers AC funcs via props
    // the component will be rerendered on changes! NOT via direct 
    // call (like setInProgress(true)) 
    // cause rerendering will happen on changes in props
    this.props.setInProgress(true);
    UsersAPI.getUsers().then(users => {
      console.log("users - ", users);
      this.props.setUsers(users);
      this.props.setInProgress(false);
    });
  }

  render() {
    return <Button inProgress={this.props.usersReducer.inProgress}
                   onClick={this.onClick}
            />
  }
}
//TODO: all the connect and mapState are needed for component that should have
// an access to the STATE and AC funcs
const mapStateToProps = (state) => {
  console.log("state in container - ", state);
  return {
    ...state // TODO: if the component which is connected needs all the state, then pass ...state
  };
};

export default connect(mapStateToProps, {setUsers, setInProgress})(UsersContainer);