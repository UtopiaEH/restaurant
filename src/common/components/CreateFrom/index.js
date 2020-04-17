import React from "react";
import { DatePicker, Form, Input, Modal, Select } from "antd";
import { MEALS, PLAN_MEAL } from "../../constants";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [ form ] = Form.useForm();
  const { Option } = Select;

  const config = {
    rules: [ { type: 'object', required: true, message: 'Please select time!' } ],
  };

  return (
    <Modal
      visible={ visible }
      title={ PLAN_MEAL }
      okText="Create"
      cancelText="Cancel"
      onCancel={ onCancel }
      onOk={ () => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      } }
    >
      <Form
        form={ form }
        layout="vertical"
        name="form_in_modal"
        initialValues={ {
          modifier: 'public',
        } }
      >
        <Form.Item
          name="select"
          hasFeedback
          rules={ [ { required: true, message: 'Please select a meal!' } ] }
        >
          <Select placeholder="Please select a meal!">
            { MEALS.map((meal, index) => (
              <Option key={ index } value={ meal }>{ meal }</Option>
            )) }

          </Select>
        </Form.Item>

        <Form.Item name="description" >
          <Input placeholder="Input place"  type="textarea"/>
        </Form.Item>

        <Form.Item name="orderDate" { ...config }>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default CollectionCreateForm
