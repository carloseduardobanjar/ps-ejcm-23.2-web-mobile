import { Bg, LoginDiv, Title, InputSection, Alerta } from "./style";
import Onda from '../../assets/onda.svg';
import Email from '../../assets/email.svg';
import Senha from '../../assets/senha.svg';
import Nascimento from '../../assets/nascimento.svg';
import Perfil from '../../assets/perfil.svg';
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";


export default function Cadastro() {
    const navigate = useNavigate();

    return(
        <LoginDiv>
            <Bg src={Onda} alt="Onda"/>
            <Title>Cadastro</Title>
            <InputSection>
                <InputComponent icon={Perfil} placeholder="Nome" />
                <InputComponent icon={Email} placeholder="E-mail" />
                <InputComponent icon={Nascimento} placeholder="Nascimento" />
                <InputComponent isPassword icon={Senha} placeholder="Senha" />
                <InputComponent isPassword icon={Senha} placeholder="Confirmar sneha" />
            </InputSection>
            <ButtonComponent functionOnClick={() => navigate("/home")} title="Cadastrar" />
            <Alerta onClick={() => navigate("/login")}>Já possui conta? Entre</Alerta>
        </LoginDiv>
    );
}