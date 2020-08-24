import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => ({
  route: state.router.route,
  notes: state.dashboard.notes,
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
  
  