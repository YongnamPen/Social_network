import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import { SLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginScheme = yup.object({
  userEmail: yup.string().email("Введите корректно почту").required(),
  userPassword: yup
    .string()
    .min(4, "Пароль должен быть не менее 4 символов")
    .required(),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser,{data: userdata}] = useLoginUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginScheme),
    mode: "onBlur",
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });
  useEffect(() => {
    if (userdata) {
      navigate("/main-page");
    }
  }, [userdata]);
  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    const payload = {
      email: data.userEmail,
      password: data.userPassword,
    };
    loginUser(payload);
    console.log(userdata);
    
  };

  return (
    <SLoginPage>
      <Heading headingText="Авторизация" headingType="h1" />
      <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              isError={errors.userEmail ? true : false}
              errorMessage={errors.userEmail?.message}
              placeholder="Введите свою почту"
              type="email"
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              isError={errors.userPassword ? true : false}
              errorMessage={errors.userPassword?.message}
              placeholder="Пароль"
              type="password"
              {...field}
            />
          )}
        />
        <AppButton buttonText="Войти" isDisabled={false} />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo path="/registration-page" />
    </SLoginPage>
  );
};
