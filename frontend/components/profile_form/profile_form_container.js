import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { toggleModal } from '../../actions/modal_actions';
import { updateUserWithImage } from '../../actions/user_actions';

const mapStateToProps = state => ({
  profileModalOn: state.modal.profileModalOn,
  pageUser: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  toggleModal: modal => dispatch(toggleModal(modal)),
  updateUserWithImage: (formData, id) => dispatch(updateUserWithImage(formData, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
