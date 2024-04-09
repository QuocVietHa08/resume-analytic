import React, { useState } from 'react';
import { Form, Input, Button, Modal, Row, Col } from 'antd';
import { EditOutlined, MinusCircleOutlined, PlusOutlined, CompressOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';

import styles from './styles.module.scss';

const Experience = ({ info, onChangeInfo, index }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (info?.length === 0) return null;

  return (
    <Draggable draggableId="experience" index={index} key="experience">
      {(provided) => (
        <div className={styles.experience} ref={provided.innerRef} {...provided.draggableProps}>
          <div className={styles.buttonEditWrap}>
            <ModalEditExperience
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
            <div className={styles.text}>Experience</div>
            <div className={styles.line}></div>
          </div>
          <div className="flex flex-column gap-10">
            {info.map((item) => (
              <ExperienceItem key={item.id} info={item} />
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Experience;

const ExperienceItem = ({ info }) => {
  return (
    <div className={styles.item}>
      <Row>
        <Col span={8} className="text-bold">
          {info.role}
        </Col>
        <Col span={8} className="text-bold text-center flex-i justify-center">
          <div className="text-bold text-center border-bottom-1 no-wrap w-min-content">{info.company}</div>
        </Col>
        <Col span={8} className="text-bold text-right">
          {info.location}, {info.startDate} - {info.endDate}
        </Col>
      </Row>
      <div>
        <ul>
          {info.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ml-25">
        <div className="text-bold">Projects: </div>
        <ul>
          {info.projects.map((project) => (
            <li key={project.id}>
              <span className="text-bold">{project.name}: </span>
              <span>{project.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ModalEditExperience = ({ info, open, onOpenModal, onCloseModal, onSubmit }) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleCreateUpdateValue = (newValue) => {
    return newValue.map((item, indexValue) => ({
      ...item,
      description: item.description.map((desc) => desc.text),
      projects: item.projects.map((proj, index) => ({
        name: proj.name,
        description: proj.description,
        id: index + 1,
      })),
      id: indexValue + 1,
    }));
  };

  const handleFinish = (values) => {
    const { experience } = values;
    const newValue = handleCreateUpdateValue(experience);
    onSubmit(newValue, 'experience');
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
    form.resetFields();
  };

  const initialValues = {
    experience: info.map((record, index) => ({
      ...record,
      key: index,
      description: record.description.map((desc, descIndex) => ({
        text: desc,
        key: `desc_${index}_${descIndex}`,
      })),
      projects: record.projects.map((proj, projIndex) => ({
        ...proj,
        key: `proj_${index}_${projIndex}`,
      })),
    })),
  };

  return (
    <>
      <button type="button" className={styles.buttonEdit} onClick={onOpenModal} aria-label="Edit">
        <EditOutlined />
      </button>
      <Modal closeIcon={<></>} width={1000} title="Edit Experience" open={open} footer={null}>
        <Form {...layout} form={form} initialValues={initialValues} onFinish={handleFinish}>
          <Form.List name="experience">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className={styles.formListItem}>
                    <Form.Item
                      {...restField}
                      name={[name, 'company']}
                      label="Company"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your company!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'location']}
                      label="Location"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your location!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'role']}
                      label="Role"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your role!',
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
                    <Form.List name={[name, 'description']}>
                      {(fieldsDescription, desOpt) => (
                        <div>
                          {fieldsDescription.map(({ key: keyDes, name: nameDes, ...restFieldDes }) => (
                            <div key={keyDes} className={styles.formListItem}>
                              <Form.Item
                                {...restFieldDes}
                                name={[nameDes, 'text']}
                                label={`Description ${keyDes + 1}`}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input the description!',
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <button
                                type="button"
                                className={styles.formListItemDeleteIcon}
                                onClick={() => desOpt.remove(nameDes)}
                                aria-label="Remove"
                              >
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
                            <Button type="dashed" className="mx-center w-full" onClick={() => desOpt.add()} block icon={<PlusOutlined />}>
                              Add Description
                            </Button>
                          </Form.Item>
                        </div>
                      )}
                    </Form.List>
                    <Form.List {...restField} name={[name, 'projects']}>
                      {(fieldsProjects, projectOpt) => (
                        <>
                          {fieldsProjects.map(({ key: keyProj, name: nameProj, ...restFieldProj }) => (
                            <div key={keyProj} className={styles.formListItem}>
                              <Form.Item
                                {...restFieldProj}
                                name={[nameProj, 'name']}
                                label={`Project Name ${keyProj + 1}`}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input the project name!',
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                {...restFieldProj}
                                name={[nameProj, 'description']}
                                label={`Project Description ${keyProj + 1}`}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input the project description!',
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <button
                                type="button"
                                className={styles.formListItemDeleteIcon}
                                onClick={() => projectOpt.remove(nameProj)}
                                aria-label="Remove"
                              >
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
                            <Button
                              type="dashed"
                              className="mx-center w-full"
                              onClick={() => projectOpt.add()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Add Project
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>

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
                    Add Experience
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
