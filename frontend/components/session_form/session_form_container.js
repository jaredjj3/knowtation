import { connect } from 'react-redux';
import SessionForm  from './session_form';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sessionErrors: state.errors.sessionErrors,
  usernameErrors: state.errors.usernameErrors,
  passwordErrors: state.errors.passwordErrors,
  modalOn: state.modal.sessionModalOn
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    toggleModal: modal => dispatch(toggleModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
