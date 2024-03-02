'use client'

import React, {useState} from 'react';
import {Button, Modal} from 'antd';

const AddUserFormModal: React.FC = () => {
  const [open, setOpen] = useState(false); // Controls the visibility of the modal
  const [confirmLoading, setConfirmLoading] = useState(false); // Manages the loading state of the confirmation button
  const [modalText, setModalText] = useState('Content of the modal'); // Stores the modal's content text

  // Function to open the modal
  const showModal = () => {
    setOpen(true);
  };

  // Function to handle the OK action
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  // Function to handle the cancel action
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default AddUserFormModal;
