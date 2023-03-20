import { Button, Form, Input } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

import useUpdateAdminUser from '@/hooks/data/admin-users/useUpdateAdminUser';
import useTrans from '@/i18n/useTrans';

import styles from '@/styles/admin-users/styles.module.scss';

const EditAdmin = ({ dataAccount, updateSuccess, updateError }) => {
  const [form] = Form.useForm();
  const trans = useTrans()

  const { isLoading, mutate: updateAdminUser } = useUpdateAdminUser();

  const onFinish = (adminDataUpdate) => {
    const dataUpdate = {};

    if (adminDataUpdate?.password.trim() === '') {
      dataUpdate.email = adminDataUpdate?.email;
    } else {
      if (adminDataUpdate.email !== dataAccount?.email) {
        dataUpdate.email = adminDataUpdate.email;
      } 
      dataUpdate.password = adminDataUpdate.password;
    }

    updateAdminUser(
      { adminID: dataAccount?.id, adminDataUpdate: dataUpdate },
      {
        onSuccess: updateSuccess,
        onError: updateError,
      },
    );
  };

  return (
    <Form
      className={styles.form}
      name="editRole"
      form={form}
      onFinish={onFinish}
      initialValues={{
        email: dataAccount?.email,
        password: '',
      }}
      layout="vertical"
      wrapperCol={{
        span: 24,
      }}
    >
      <Form.Item
        label={trans.common.email}
        name="email"
        rules={[
          { type: 'email', message: trans.errorMessages.invalidEmail },
          { required: true, message: trans.errorMessages.required },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item rules={[{ min: 6, message: trans.errorMessages.passwordMinLength6 }]} label={trans.common.password} name="password">
        <Input.Password className={styles.fixHeight} />
      </Form.Item>

      <Form.Item>
        <Button className="btn" type="primary" htmlType="submit" size="large">
          {isLoading ? <Loading3QuartersOutlined className="svg-margin-0" spin /> : <span>{trans.common.save}</span>}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditAdmin;
