import LogoIcon from '../../assets/logo.svg';
import { Header, Esquerda, Logo, Title } from './style';

type HeaderProps = {
    title: string;
}

export default function HeaderComponent({title} : HeaderProps) {
    return(
        <Header>
            <Esquerda>
                <Logo src={LogoIcon} alt="Logo" />
                <Title> {title} </Title>
            </Esquerda>
        </Header>
    );
}