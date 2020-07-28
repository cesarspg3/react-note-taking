import { connect } from 'react-redux';
import UserDetail from '../components/UserDetail';
import { getUser } from '../thunks';
import { goTo } from './../actions/creators';

const mapStateToProps = state => ({
  loading: state.userDetail.loading,
  error: state.userDetail.error,
  user: state.userDetail.user,
})

const mapDispatchToProps = {
  getUser,
  goTo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail)
  
  