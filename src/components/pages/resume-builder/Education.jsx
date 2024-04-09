import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { EditOutlined, MinusCircleOutlined, PlusOutlined, CompressOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';
// import DraggableComponent from './DraggableComp';
import styles from './styles.module.scss';

const Education = ({ info, onChangeInfo, index }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (info?.length === 0) return null;

  return (
    <Draggable draggableId="education" index={index} key="education">
      {(provided) => (
        <div className={styles.education} ref={provided.innerRef} {...provided.draggableProps}>
          <div className={styles.buttonEditWrap}>
            <ModalEditEducation
              info={info}
              onSubmit={onChangeInfo}
              open={open}
              onOpenModal={handleOpenModal}
              onCloseModal={handleCloseModal}
            />
            <div className={styles.buttonEdit} {...provided.dragHandleProps}>
              <CompressOutlined />
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.text}>Education</div>
            <div className={styles.line}></div>
          </div>
          <div>
            <ul className="flex flex-column gap-5">
              {info.map((item) => (
                <EducationItem key={item.id} info={item} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};


export default Education;

const EducationItem = ({ info }) => {
  return (
    <li>
      <div className="flex items-center justify-between">
        <div>{info.school}</div>
        <div className="text-bold">
          {info.startDate}-{info.endDate}
        </div>
      </div>
      <div>
        <span>Major: {info.major}</span>
      </div>
    </li>
  );
};

const ModalEditEducation = ({ info, open, onOpenModal, onCloseModal, onSubmit }) => {
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
    const { education } = values;
    onSubmit(education, 'education');
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
    form.resetFields();
  };

  const initialValues = {
    education: info.map((record, index) => ({
      ...record,
      key: index,
    })),
  };

  return (
    <>
      <button type="button" className={styles.buttonEdit} onClick={onOpenModal} aria-label="Edit">
        <EditOutlined />
      </button>
      <Modal closeIcon={<></>} title="Edit Education" open={open} footer={null}>
        <Form {...layout} form={form} initialValues={initialValues} onFinish={handleFinish}>
          <Form.List name="education">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className={styles.formListItem}>
                    <Form.Item
                      {...restField}
                      name={[name, 'school']}
                      label="School"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your school!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'major']}
                      label="Major"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your major!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'startDate']}
                      label="Start Date"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your start date!',
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
                          message: 'Please input your end date!',
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
                    Add Education
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
