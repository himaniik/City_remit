import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";

import axios from "./request/axios";

export default function Login(){

      const nav = useNavigate();
      const [user, setUser] = useState({
        login_id: "",
        login_password: ""
      });
      const [error, setError] = useState("");
    
      // useEffect(()=>{
      //   localStorage.getItem('role').map(
      //     (role)=>{
      //       console.log(role.role_id)
      //     }
      //   )
      // },[]);
    
      async function loginUser(e) {
        e.preventDefault();
        await axios
          .post("/config/v1/auths/login", user)
          .then((res) => {
            if (res.data.success === true) {
              localStorage.setItem("cityremit-token", res.data.data[0].jwt_token);
              localStorage.setItem(
                "cityremit-fullName",
                res.data.data[0].full_name
              );
              localStorage.setItem("cityremit-user-id", res.data.data[0].id);
              localStorage.setItem(
                "cityremit-user-image",
                res.data.data[0].profile_picture
              );
              localStorage.setItem("cityremit-user", res.data.data[0].login_id);
              localStorage.setItem(
                "cityremit-permissions",
                JSON.stringify(res.data.data[0].permission)
              );
    
              // console.log("dasdad");
              setError("");
              nav("/dashboard");
              window.location.push("/dashboard");
            } else if (res.data.success === false) {
              setError("Invalid Credentials.Try Again");
            }
          })
          .catch((e) => {
            setError("Invalid Credentials.Try Again");
            console.log(e);
          });
      }

  return (
   
    <div
    style={{
      backgroundColor: "#f0f2f5",
      minHeight: "400vh",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        className="login-form"
        style={{
          padding: "50px",
          backgroundColor: "white",
          marginTop: "20vh",
          minWidth: "23vw",
          borderRadius: "8px",
          border: "1px solid #e6e6e7",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              marginBottom: "30px"
            }}
            src="https://jp-dev.cityremit.global/static/media/city-express-logo.f913d3a8.png"
            alt=""
            width={"130px"}
          />
        </div>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
            style={{
              padding: "8px",
              borderRadius: "5px",
            }}
            onChange={(e) =>
                setUser({ ...user, login_id: e.target.value })
              }
              value={user.login_id}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{
              padding: "8px",
              borderRadius: "5px",
            }}
            onChange={(e) =>
                setUser({ ...user, login_password: e.target.value })
              }
              value={user.login_password}
          />
        </Form.Item>
        <Form.Item>
          <a
            style={{
              color:"red",
              float: "right",
            }}
            
          >
            Forgot password
          </a>
        </Form.Item>
        <Button
          onClick={loginUser}
          type="primary"
          style={{
            color:"white",
            backgroundColor:"#3761bd",
            margin:"20px 0 0 10px",
            width: "100%",
            borderRadius: "5px",
            border:"1px solid grey"
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  </div>
  )
}

