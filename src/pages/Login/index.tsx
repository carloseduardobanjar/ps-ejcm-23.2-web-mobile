import { Bg, LoginDiv, Title, InputSection, Alerta } from "./style";
import Onda from '../../assets/onda.svg';
import Email from '../../assets/email.svg';
import Senha from '../../assets/senha.svg';
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";


export default function Login() {
    const navigate = useNavigate();

    return(
        <LoginDiv>
            <Bg src={Onda} alt="Onda"/>
            <Title>Login</Title>
            <InputSection>
                <InputComponent icon={Email} placeholder="E-mail" />
                <InputComponent isPassword icon={Senha} placeholder="Senha" />
            </InputSection>
            <ButtonComponent functionOnClick={() => navigate("/home")} title="Entrar"/>
            <Alerta onClick={() => navigate("/cadastro")}>Não possui conta? Cadastre-se</Alerta>
        </LoginDiv>
    );
}