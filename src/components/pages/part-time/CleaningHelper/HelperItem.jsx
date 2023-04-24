import { Modal, Table } from 'antd';
import { useState } from 'react';
import styles from '@/components/pages/part-time/styles.module.scss';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const dataSource = [
  {
    key: '1',
    tasks: 'General Cleaning',
    tools: `Cloths (microfiber and normal), small pail with handle, 
    floor squeegee, vacuum, mop and bucket set, floor cleaner`,
  },
  {
    key: '2',
    tasks: 'Kitchen',
    tools: 'Dishwashing liquid, kitchen stove cleaner',
  },
  {
    key: '3',
    tasks: 'Bathroom',
    tools: `Bathroom stain remover, toilet bowl bleach,\n bathroom scrub brush, toilet bowl brush`,
  },
  {
    key: '4',
    tasks: 'Bedroom',
    tools: 'Cloths (microfiber and normal), washing machine \n (for washing of linens and clothes)',
  },
  {
    key: '5',
    tasks: 'Additional',
    tools: 'Glass cleaning spray, cloths (microfiber and normal),\n iron and ironing board',
  },
];

const HelperItem = ({ title, imgSrc, content, isPartTimeHelper }) => {
  const width = useDetectWindowSize();
  const [isShowModal, setIsShowModal] = useState(false);

  const columns = [
    {
      title: 'Tasks',
      dataIndex: 'tasks',
      key: 'tasks',
      width: width > 1600 ? 300 : 100,
    },
    {
      title: 'Cleaning Tools and Equipment',
      dataIndex: 'tools',
      key: 'tools',
    },
  ];

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className={styles.partimeItem}>
      <img src={imgSrc} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {content}
        {isPartTimeHelper && (
          <span>
            <a
              className="font-size-20 color-black-primary font-size-tb-16 font-size-sp-12 text-underline"
              href="https://api.whatsapp.com/send/?phone=6588380909"
            >
              +65 8838 0909.
            </a>
          </span>
        )}
        {isPartTimeHelper && (
          <div>
            <span className="font-size-20">
              • Cleaning materials are to be provided for a smooth cleaning experience. See list of cleaning equipment
            </span>
            <span
              tabIndex={0}
              role="button"
              onKeyDown={() => setIsShowModal(true)}
              className={styles.clickableTag}
              onClick={() => setIsShowModal(true)}
            >
              here.
            </span>
          </div>
        )}
      </div>

      {isShowModal && (
        <Modal
          className="modal-parttime-helper"
          onCancel={handleCloseModal}
          footer={null}
          width={width > 768 ? 1143 : 355}
          open={isShowModal}
        >
          <div className="modal-parttime-helper-wrapper">
            <div className="parttime-helper-table-wrapper">
              <Table columns={columns} dataSource={dataSource} pagination={false} />
            </div>
            <div className={styles.noteSection}>
              <span>Note:</span>
              The specific cleaning tools and equipment needed may vary depending on the tasks being performed and the specific needs of the
              client. It is always a good idea to discuss your specific cleaning needs with your cleaner to ensure that all necessary
              supplies are provided.
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default HelperItem;
