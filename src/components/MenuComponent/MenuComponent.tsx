import { Menu, Icon } from "./style";
import HomeIcon from '../../assets/home.svg';
import NotIcon from '../../assets/notificacao.svg';
import PerfilIcon from '../../assets/perfil.svg';


export default function MenuComponent() {
    return(
        <Menu>
            <Icon src={PerfilIcon} alt="Ícone de perfil" />
            <Icon src={HomeIcon} alt="Ícone de home" />
            <Icon src={NotIcon} alt="Ícone de notificação" />
        </Menu>
    );
}