import React, { useCallback, useEffect } from 'react';
import { ModalWrapper } from 'style-guide';
import { MODALS } from 'common';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowResize } from 'hooks';
import { withLazy } from 'hocs';
import actions from 'store/actions';
import selectors from 'store/selectors';

// MODALS
const SignIn = withLazy(import('components/authorization/SignIn'));
const SignUp = withLazy(import('components/authorization/SignUp'));
const ForgotPassword = withLazy(import('components/authorization/ForgotPassword'));
const ResetPassword = withLazy(import('components/authorization/ResetPassword'));
const ForgotPasswordSuccess = withLazy(import('./ForgotPasswordSuccess'));
const ResetPasswordSuccess = withLazy(import('./ResetPasswordSuccess'));
const SignUpSuccess = withLazy(import('./SignUpSuccess'));
const AddLabel = withLazy(import('./AddLabel'));
const ChooseKeywords = withLazy(import('../ChooseKeywoords'));
const CreateNewTemplate = withLazy(import('../CreateNewTemplate'));
const Statistics = withLazy(import('./Statistics'));
const CooperationFinder = withLazy(import('../CooperationFinder'));
const TestTemplate = withLazy(import('../TestTemplate'));
const UnsubscribersList = withLazy(import('../UnsubscribersList'));
const CooperationSuccess = withLazy(import('./CooperationSuccess'));
const AddKeyword = withLazy(import('./AddKeyword'));
const PurchaseSuccess = withLazy(import('./PurchaseSuccess'));
const NewCampaign = withLazy(import('./NewCampaign'));

const getModal = ({ type }) => {
  switch (type) {
    case MODALS.SIGN_IN:
      return SignIn;
    case MODALS.SIGN_UP:
      return SignUp;
    case MODALS.SIGN_UP_SUCCESS:
      return SignUpSuccess;
    case MODALS.FORGOT_PASSWORD:
      return ForgotPassword;
    case MODALS.FORGOT_PASSWORD_SUCCESS:
      return ForgotPasswordSuccess;
    case MODALS.RESET_PASSWORD:
      return ResetPassword;
    case MODALS.RESET_PASSWORD_SUCCESS:
      return ResetPasswordSuccess;
    case MODALS.NEW_LABEL:
      return AddLabel;
    case MODALS.CHOOSE_KEYWORDS:
      return ChooseKeywords;
    case MODALS.CREATE_NEW_TEMPLATE:
      return CreateNewTemplate;
    case MODALS.STATISTICS:
      return Statistics;
    case MODALS.COOPERATION_FINDER:
      return CooperationFinder;
    case MODALS.TEST_TEMPLATE:
      return TestTemplate;
    case MODALS.UNSUBSCRIBERS_LIST:
      return UnsubscribersList;
    case MODALS.COOPERATION_SUCCESS:
      return CooperationSuccess;
    case MODALS.ADD_KEYWORD:
      return AddKeyword;
    case MODALS.PURCHASE_SUCCESS:
      return PurchaseSuccess;
    case MODALS.NEW_CAMPAIGN:
      return NewCampaign  
    default:
      return null;
  }
};

const Modal = () => {
  const dispatch = useDispatch();
  const { isMobile } = useWindowResize();
  const {
    modal: { type, payload },
  } = useSelector(selectors.ui);
  const closeModal = useCallback(() => dispatch(actions.ui.closeModal()), [dispatch]);
  const Component = getModal({ type });

  useEffect(() => {
    isMobile && type && !payload?.infoModal && closeModal();
  }, [isMobile, type, closeModal, payload?.infoModal]);

  return Component ? (
    <ModalWrapper
      title={payload?.infoModal ? '' : type}
      isOpen={true}
      onRequestClose={closeModal}
      children={<Component closeModal={closeModal} {...payload} />}
    />
  ) : null;
};

export default Modal;
