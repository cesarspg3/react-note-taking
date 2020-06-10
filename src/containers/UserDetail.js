import { connect } from 'react-redux';
import UserDetail from '../components/UserDetail';
import { updateUser, deleteUser } from '../thunks';

const mapStateToProps = state => ({
  token: state.login.token,
  users: state.listUsers.users,
})

const mapDispatchToProps = {
  updateUser,
  deleteUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail)
  
  