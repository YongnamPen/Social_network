import { LoginInfo } from "../../components/LoginInfo/LoginInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import { SRegistrationPage } from "./RegistrationPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IRegistrationForm {
  userEmail: string;
  userPhone: string;
  userPassword: string;
}

const registrationScheme = yup.object({
  userEmail: yup.string().email("Введите корректно почту").required(),
  userPhone: yup
    .string()
    .min(11, "Введите корректно номер телефона")
    .required(),
  userPassword: yup
    .string()
    .min(4, "Пароль должен быть не менее 4 символов")
    .required(),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationScheme),
    mode: "onBlur",
    defaultValues: {
      userEmail: "",
      userPhone: "",
      userPassword: "",
    },
  });
  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const payload = {
      userEmail: data.userEmail,
      userPhone: data.userPhone,
      userPassword: data.userPassword,
    };
    console.log(payload);
  };
  return (
    <SRegistrationPage>
      <Heading headingText="Регистрация" headingType="h1" />
      <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>
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
          name="userPhone"
          control={control}
          render={({ field }) => (
            <AppInput
              isError={errors.userPhone ? true : false}
              errorMessage={errors.userPhone?.message}
              placeholder="Введите номер телефона"
              type="tel"
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
        <AppButton buttonText="Зарегистрироваться" isDisabled={false} />
      </form>
      <LoginInfo path="/" />
    </SRegistrationPage>
  );
};
