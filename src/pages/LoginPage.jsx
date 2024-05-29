import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/loginSlice";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () =>{
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loginState = useSelector((state) => state.login.isLogin);
  // const loginRegister = () => {
  //   return {
  //     required: "아이디를 입력해주세요.",
  //     maxLength: {
  //       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
  //       message: "이메일 형식에 맞게 입력해 주세요.",
  //     },
  //   };
  // }

  const loginRegister = register("loginId", {
    required: "아이디를 입력해주세요.",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
      message: "이메일 형식에 맞게 입력해 주세요.",
    },
  });

    const pwRegister = register("loginPw", {
      required: "비밀번호를 입력해주세요.",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i,
        message: "올바른 비밀번호를 입력해주세요",
      },
    });

  const onSubmit = (data) => {
    console.log(data);
    
    dispatch(login(data));
    
  }
  const loginState = useSelector((state) => state.loginSlice.isLogin);
  useEffect(() => {
    loginState && navigate("/main");
    !loginState && navigate("/login");
  }, [loginState]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "로그인 페이지";
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrap">
          <label htmlFor="loginId">이메일</label>
          <input type="text" id="loginId" {...loginRegister} />
          {errors.loginId && errors.loginId.message}
        </div>
        <div className="input-wrap">
          <label htmlFor="loginPw">비밀번호</label>
          <input type="password" id="loginPw" {...pwRegister} />
          {errors.loginPw && errors.loginPw.message}
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default LoginPage;