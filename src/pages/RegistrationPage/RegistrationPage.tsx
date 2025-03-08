import { LoginInfo } from "../../components/LoginInfo/LoginInfo"
import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import { Heading } from "../../components/UI/Heading/Heading"
import { SRegistrationPage } from "./RegistrationPage.style"

export const RegistrationPage = () => {
    return (
        <SRegistrationPage>
            <Heading headingText="Регистрация" headingType="h1"/>
            <form action="#">
                <AppInput inputValue="" placeholder="Имя и Фамилия" type="text"/>
                <AppInput inputValue="" placeholder="Номер телефона" type="tel"/>
                <AppInput inputValue="" placeholder="Пароль" type="password"/>
                <AppButton buttonText="Зарегистрироваться" isDisabled/>
            </form>
            <LoginInfo path="/"/>
        </SRegistrationPage>
    )
}