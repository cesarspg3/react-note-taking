import { connect } from 'react-redux';
import Login from '../components/Login';
import { restoreLogin } from './../actions/creators';
import { login } from './../thunks';

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
  token: state.login.token
})

const mapDispatchToProps = {
  login,
  restoreLogin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
  
  