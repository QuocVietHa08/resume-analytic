import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

import styles from './styles.module.scss';

const ModalComponent = (props) => {
  const { buttonOk, buttonCancel, isModalOpen, handleOk, handleCancel, typeIconModalContent, titleModalContent } = props;

  const showIconModalContent = () => {
    switch (typeIconModalContent) {
      case 'reject':
        return <CloseCircleOutlined className={`${styles.iconModal} ${styles.iconModalReject} `} />;
      case 'approved':
        return <CheckCircleOutlined className={styles.iconModal} />;
      default:
        return <></>;
    }
  };

  return (
    <Modal
      centered
      width={380}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button className={`${styles.btn} m-10 `} danger={buttonCancel.danger} size="large" type={buttonCancel.type} onClick={handleCancel} key="1">
          {buttonCancel.name}
        </Button>,
        <Button className={`${styles.btn} m-10`} danger={buttonOk.danger} size="large" type={buttonOk.type} onClick={handleOk} key="2">
          {buttonOk.name}
        </Button>,
      ]}
    >
      <div className={styles.contentModal}>
        {showIconModalContent()}
        <p className={styles.titleModal}>{titleModalContent}</p>
      </div>
    </Modal>
  );
};

export default ModalComponent;
