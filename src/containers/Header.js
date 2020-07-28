import { connect } from 'react-redux';
import Header from '../components/Header';
import { goTo } from './../actions/creators';

const mapStateToProps = state => ({
  route: state.router.route,
})

const mapDispatchToProps = {
    goTo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
  
  