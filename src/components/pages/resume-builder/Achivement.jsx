import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { EditOutlined, MinusCircleOutlined, PlusOutlined, CompressOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';

import styles from './styles.module.scss';

const Achivement = ({ info, onChangeInfo, index }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (info.length === 0) return null;

  return (
    <Draggable draggableId="achivement" index={index} key="achivement">
      {(provided) => (
        <div className={styles.achivement} ref={provided.innerRef} {...provided.draggableProps}>
          <div className={styles.buttonEditWrap}>
            <ModalEditPersonalProject
              info={info}
              onSubmit={onChangeInfo}
              onOpenModal={handleOpenModal}
              onCloseModal={handleCloseModal}
              open={open}
            />
            <div className={styles.buttonEdit} {...provided.dragHandleProps}>
              <CompressOutlined />
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.text}>Achivements</div>
            <div className={styles.line}></div>
          </div>
          <div className="flex flex-column gap-5">
            {info.map((item) => (
              <AchivementItem key={item.id} info={item} />
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Achivement;

const AchivementItem = ({ info }) => {
  return (
    <div className={styles.item}>
      <span className="text-bold">{info.name}: </span>
      <span className={styles.description}>
        {info.description}
        <span className="ml-5 text-bold">
          ({info.startDate}-{info.endDate})
        </span>
      </span>
    </div>
  );
};

const ModalEditPersonalProject = ({ info, open, onOpenModal, onCloseModal, onSubmit }) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleFinish = (values) => {
    const { achivement } = values;
    onSubmit(achivement, 'achivement');
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
    form.resetFields();
  };

  const initialValues = {
    achivement: info.map((record, index) => ({
      ...record,
      key: index,
    })),
  };

  return (
    <>
      <button type="button" className={styles.buttonEdit} onClick={onOpenModal} aria-label="Edit">
        <EditOutlined />
      </button>
      <Modal width={1000} closeIcon={<></>} title="Edit Achivements" open={open} footer={null}>
        <Form {...layout} form={form} initialValues={initialValues} onFinish={handleFinish}>
          <Form.List name="achivement">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className={styles.formListItem}>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      label="Project Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your achivement!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'description']}
                      label="Project Description"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your achivement description!',
                        },
                      ]}
                    >
                      <Input.TextArea rows={3} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'startDate']}
                      label="Start Date"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your achivement start date!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'endDate']}
                      label="End Date"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your achivement end date!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <button type="button" className={styles.formListItemDeleteIcon} onClick={() => remove(name)} aria-label="Remove">
                      <MinusCircleOutlined />
                    </button>
                  </div>
                ))}
                <Form.Item
                  wrapperCol={{
                    offset: 0,
                    span: 24,
                  }}
                  className="mt-10"
                >
                  <Button type="dashed" className="mx-center w-full" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Project
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button className="ml-10" onClick={handleCancel}>
              Close
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
