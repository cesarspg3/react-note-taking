import { connect } from 'react-redux';
import Logout from '../components/Logout';
import { logout } from './../actions/creators';

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)
  
  