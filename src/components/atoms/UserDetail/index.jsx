import { useMemo, useState } from 'react';
import { Row, Col, Table, Empty, Button, Popover, Modal } from 'antd';
import { CloseCircleOutlined, IdcardOutlined, MailOutlined, OrderedListOutlined, SwapOutlined, WalletOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';

import InputSelect from '../InputSelect';
import useUserTransaction from '@/hooks/data/user-transaction/userTransaction';
import ShortenString from '@/components/atoms/ShortenString';
import useTrans from '@/i18n/useTrans';

import styles from './styles.module.scss';

const UserDetail = (props) => {
  const valueChain = useSelector((state) => state.chainSelect.chain);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [chain, setChain] = useState(valueChain?.value);
  const { data: listTransaction, isLoading: transactionLoading, isSuccess: transactionSuccess } = useUserTransaction(props.id, chain, page);
  const trans = useTrans()

  const dataTransaction = useMemo(() => {
    if (!transactionSuccess) return [];
    return listTransaction?.data?.map((action, index) => ({
      key: index,
      seller: action.seller,
      buyer: action.buyer,
      transactionHash: action.transactionHash,
      dateTime: moment(action.dateTime, 'YYYYMMDD').fromNow(),
    }));
  }, [listTransaction, transactionSuccess]);

  const columns = [
    {
      title: trans.users.from,
      dataIndex: 'seller',
      key: 'seller',
      render: (seller) => (
        <Popover content={seller}>
          <div className="pointer">{ShortenString(seller)}</div>
        </Popover>
      ),
    },
    {
      title: trans.users.to,
      dataIndex: 'buyer',
      key: 'buyer',
      render: (buyer) => (
        <Popover content={buyer}>
          <div className="pointer">{ShortenString(buyer)}</div>
        </Popover>
      ),
    },
    {
      title: 'TxID',
      dataIndex: 'transactionHash',
      key: 'transactionHash',
      render: (transactionHash) => (
        <Popover content={transactionHash}>
          <div className="pointer">{ShortenString(transactionHash)}</div>
        </Popover>
      ),
    },
    {
      title: trans.users.date,
      dataIndex: 'dateTime',
      key: 'dateTime',
      align: 'center',
    },
  ];

  const handleOk = () => {
    props.handleFuctionModal();
    if (props.modalLoading) return
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
        <div className={`${styles.wrapper} mb-30 pb-16 bg-white`}>
          <div className="ml-16 mt-20">
            <p className={styles.nameUser}>{props.dataUser?.username?.toUpperCase()}</p>

            <Col className={styles.detailCol} span={24}>
              <span className={styles.detailLabel}>
                <IdcardOutlined /> ID:
              </span>
              <p className={`${styles.detailUser} mb-0`}>{props.dataUser.id}</p>
            </Col>

            <Col className={styles.detailCol} span={24}>
              <span className={styles.detailLabel}>
                <MailOutlined /> メール:
              </span>
              <p className={`${styles.detailUser} mb-0`}>{props.dataUser.email}</p>
            </Col>

            <Col className={styles.detailCol} span={24}>
              <span className={styles.detailLabel}>
                <WalletOutlined /> アドレス:
              </span>
              <p className={`${styles.detailUser} mb-0`}>{ShortenString(props.dataUser.walletAddress)}</p>
            </Col>

            <Col className={styles.detailCol} span={24}>
              <span className={styles.detailLabel}>
                <OrderedListOutlined /> 取引回数:
              </span>
              <p className={`${styles.detailUser} mb-0`}>{listTransaction?.pagination?.totalItem}</p>
            </Col>

            <Row className={styles.btn}>
              <Col>
                <Button
                  ghost={props.ghost}
                  className="flex-i item-center"
                  type={props.typeModal === 0 ? 'primary' : null}
                  size="large"
                  danger={props.typeModal === 0}
                  onClick={() => setIsOpenModal(true)}
                >
                  {props.typeModal === 1 ? 'ブラックリストのユーザーを削除' : 'ブラックリストに追加'}
                </Button>
                <Modal
                  centered
                  width={380}
                  open={isOpenModal}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button className="btn m-10" size="large" onClick={handleCancel} key="1">
                      キャンセル
                    </Button>,
                    <Button className="btn m-10" danger size="large" type="primary" onClick={handleOk} key="2">
                      {props.typeModal === 1 ? '削除する' : '追加'}
                    </Button>,
                  ]}
                >
                  <div className={styles.contentModal}>
                    <CloseCircleOutlined className={`${styles.iconModal} ${styles.iconModalReject} `} />
                    <p className={styles.titleModal}>
                      {props.typeModal === 1
                        ? 'このユーザーをブラックリストから削除してもよろしいですか?'
                        : 'このユーザーをブラックリストに追加してもよろしいですか?'}
                    </p>
                  </div>
                </Modal>
              </Col>
            </Row>
          </div>
        </div>
      </Col>

      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={16}>
        <div className="wrapperTable mb-0-i">
          <div className={`${styles.wrapperOption} ${styles.singleElement}`}>
            <InputSelect onChange={(e) => setChain(e)} className={styles.rightSelectOption}/>
          </div>
          <Table
            loading={transactionLoading}
            className="tableApproved"
            locale={{
              emptyText: <Empty description="データなし" />,
            }}
            scroll={{ x: 'auto' }}
            showSorterTooltip={false}
            bordered={false}
            dataSource={dataTransaction}
            columns={columns}
            pagination={{
              className: 'formPaginationTable',
              total: listTransaction?.pagination?.totalItem,
              showSizeChanger: false,
              onChange: (pageMount) => {
                setPage(pageMount);
              },
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default UserDetail;
