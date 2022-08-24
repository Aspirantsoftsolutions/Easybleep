import { useEffect, useState } from "react";
import "./login.scss";
import { Button, Checkbox, Form, Input, Radio } from "antd";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/bleepy.svg";
import lbg from "../../assets/img/bg.png";
import logbg from "../../assets/img/logbg.jpg";
import useicon from "../../assets/img/username-icon.png";
import passicon from "../../assets/img/password-icon.png";

import data from "../../data/users";

import { UserOutlined } from "@ant-design/icons";

const Login = (props) => {
  const [loginForm] = Form.useForm();
  const [forgotForm] = Form.useForm();
  const [users, setUser] = useState(data);
  const [role, setUserRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => { }, []);

  const login = async () => {
    let values = await loginForm.validateFields();

    let user = users.filter(
      (x) => x.Username == values.username && x.Password == values.password
    );

    if (user.length > 0) {
      setUserRole(user[0].Role);
      localStorage.setItem("Role", user[0].Role);
      localStorage.setItem("isLogin", "TRUE");
      props.getToken();
      if (user[0].Role == "ADMIN") {
        navigate("/");
      }
      else if (
        user[0].Role == "MANAGER" ||
        user[0].Role == "SUPERVISOR" ||
        user[0].Role == "AGENT"
      ) {
        navigate("/managerdashboard");
      }
      else {
        navigate("/showcountry");
      }

      console.log("login details", values);
    } else {
    }
  };

  const [isForgotPassword, setIsforgotPassword] = useState(false);

  return (
    <div className="login-components-wrapper">

      <div className="login-components">

        <div className="login-left">
          <h1>Welcome to EASY bleep!</h1>
          <h3>Get the best out of emergency activation system.</h3>
        </div>
        <div className="login-right">
          <div className="logoblk">
            <img src={logo} alt="Logo" />
          </div>

          {!isForgotPassword && (
            <Form
              form={loginForm}
              name="basic"
              labelCol={{
                span: 0,
              }}
              wrapperCol={{
                span: 0,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <div className="fitem">
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="User Name" />
                </Form.Item>
                <img src={useicon} alt="" className="useicon" />
              </div>
              <div className="fitem">
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <img src={passicon} alt="" className="passicon" />
              </div>

              <Form.Item wrapperCol={{}}>
                <div className="footer-login">
                  <Button
                    type="primary"
                    htmlType="button"
                    className="btn-forgot"
                    onClick={() => {
                      setIsforgotPassword(true);
                    }}
                  >
                    Forgot Username/Password?
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-login"
                    onClick={() => login()}
                  >
                    LOGIN
                  </Button>
                </div>
              </Form.Item>
            </Form>
          )}
          {isForgotPassword && (
            <div>
              {/* <h2>Forgot Password</h2> */}
              <Radio.Group>
                <Radio value={1}>Username</Radio>
                <Radio value={2}>Password</Radio>
              </Radio.Group>
              <Form
                form={forgotForm}
                name="basic"
                labelCol={{
                  span: 0,
                }}
                wrapperCol={{
                  span: 0,
                }}
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <div className="fitem">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </div>
                <div className="footer-login">
                  <Button
                    className="btn-forgot"
                    onClick={() => {
                      setIsforgotPassword(false);
                    }}
                  >
                    Back to login
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-login"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
