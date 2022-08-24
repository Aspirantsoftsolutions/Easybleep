import { Form, Select, Input, Button } from "antd";
import "./Changepassword.scss";
const Changepassword = () => {
  return (
    <>
      <main>
        <div className="password-wrapper">
          <h3>Change password</h3>
          <div className="passbox">
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 24,
              }}
              layout="horizontal"
            >
              <Form.Item>
                <Input placeholder="Current Password" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="New Password" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Confirm Password" />
              </Form.Item>

              <Button className="savebtn" type="primary">
                Save
              </Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Changepassword;
