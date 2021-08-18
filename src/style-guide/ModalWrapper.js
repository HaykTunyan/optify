import React from 'react';
import Modal from 'react-modal';
import { Title, Icon } from 'style-guide';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

const ModalWrapper = ({ onRequestClose, isOpen, children, title }) => {
  const { t } = useTranslation();
  return (
    <Modal
      className='modal'
      overlayClassName='modal-overlay'
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      closeTimeoutMS={500}
    >
      <div className='flex justify-between items-center w-full sticky top-0 bg-body  pt-5 px-8 z-modal'>
        <Title.Base
          children={t(title.toLowerCase())}
          className='text-primary tracking-tight font-semibold'
        />
        <button className='p-2' onClick={onRequestClose}>
          <Icon.Close className='fill-primary text-3xl' />
        </button>
      </div>
      <div children={children} className='xs:px-5 lg:px-8' />
    </Modal>
  );
};

export default ModalWrapper;
