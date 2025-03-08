import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import { SLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

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
  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    const payload = {
      useremail: data.userEmail,
      userpassword: data.userPassword,
    };
    console.log(payload);
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
