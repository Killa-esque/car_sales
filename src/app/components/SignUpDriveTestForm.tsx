import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
};

const SignUpDriveTestForm = ({ visible, onClose }: Props) => {
  return (
    <Modal
      title="Sign Up for a Test Drive"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Họ và Tên của khách hàng" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input placeholder="Số điện thoại liên hệ" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="model"
          rules={[{ required: true, message: 'Please select a model!' }]}
        >
          <Select placeholder="Model xe mong muốn">
            {/* Add options for car models here */}
            <Select.Option value="model1">Model 1</Select.Option>
            <Select.Option value="model2">Model 2</Select.Option>
            {/* ... other models */}
          </Select>
        </Form.Item>
        <Form.Item name="additionalInfo">
          <Input.TextArea placeholder="Thông tin yêu cầu thêm" />
        </Form.Item>
        {/* <Form.Item
          name="recaptcha"
          rules={[{ required: true, message: 'Please complete the CAPTCHA!' }]}
        >
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your ReCaptcha site key
          />
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  );
}

export default SignUpDriveTestForm
