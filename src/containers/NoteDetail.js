import { connect } from 'react-redux';
import NoteDetail from '../components/NoteDetail';
import { goTo, editNote } from './../actions/creators';

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  goTo,
  editNote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail)
  
  