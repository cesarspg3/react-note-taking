import { connect } from 'react-redux';
import AddNote from '../components/AddNote';
import { goTo, addNote } from './../actions/creators';

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    goTo,
    addNote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote)
  
  