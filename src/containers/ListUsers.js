import { connect } from 'react-redux';
import ListUsers from '../components/ListUsers';
import { getUsers } from '../thunks';

const mapStateToProps = state => ({
  loading: state.listUsers.loading,
  error: state.listUsers.error,
  users: state.listUsers.users,
})

const mapDispatchToProps = {
  getUsers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers)
  
  