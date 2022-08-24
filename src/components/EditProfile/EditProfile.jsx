import { Form, Select, Input, Button } from "antd";
import "./EditProfile.scss";
const EditProfile = () => {
  return (
    <>
      <main>
        <div className="profile-components-wrapper">
          <h3>Edit Profile</h3>

          <div className="editbox">
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
                <Input value={"Ahmed"} placeholder="Name" />
              </Form.Item>
              <Form.Item>
                <Input value={"Station manager"} placeholder="Designation" />
              </Form.Item>
              <Form.Item>
                <Input
                  value={"bleepymanager01@gmail.com"}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item>
                <Input value={"88997654"} placeholder="Mobile" />
              </Form.Item>
              <Form.Item>
                <Input value={"7760"} placeholder="Staff#" />
              </Form.Item>

              <Button className="savebtn" type="primary">Save</Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditProfile;
