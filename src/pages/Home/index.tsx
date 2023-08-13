import { HomeDiv, Main, Topo, Line, Input, InputIcon, InputText, IconCarrinho, Categorias, Opcao, TipoText, Cards } from "./style";
import Carrinho from '../../assets/carrinho.svg';
import Lupa from '../../assets/lupa.svg';
import Mario from '../../assets/mario.png';
import Fifa from '../../assets/fifa.png';
import Royale from '../../assets/royale.png';
import Clans from '../../assets/clans.png';
import HeaderComponent from "../../components/HeaderComponent copy/HeaderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import MenuComponent from "../../components/MenuComponent/MenuComponent";

export default function Home() {
    return(
        <HomeDiv>
           <HeaderComponent title="Home"/>
            <Main>
                <Topo>
                    <Line>
                        <Input>
                            <InputIcon src={Lupa} />
                            <InputText>Pesqusisar...</InputText>
                        </Input>
                        <IconCarrinho src={Carrinho}/>
                    </Line>
                    <Categorias>
                        <Opcao selected>Jogos</Opcao>
                        <Opcao>Peças</Opcao>
                        <Opcao>Acessórios</Opcao>
                    </Categorias>
                </Topo>
                <TipoText>Ação</TipoText>
                <Cards>
                    <CardComponent isPink icon={Mario} title="Mario Bros 1" price="R$50,00"/>
                    <CardComponent icon={Mario} title="Mario Bros 2" price="R$50,00"/>
                    <CardComponent isPink icon={Mario} title="Mario Bros 3" price="R$50,00"/>
                    <CardComponent icon={Mario} title="Mario Bros 4" price="R$50,00"/>
                </Cards>
                <TipoText>Esporte</TipoText>
                <Cards>
                    <CardComponent isPink icon={Fifa} title="FIFA 1" price="R$50,00"/>
                    <CardComponent icon={Fifa} title="FIFA 2" price="R$50,00"/>
                    <CardComponent isPink icon={Fifa} title="FIFA 3" price="R$50,00"/>
                </Cards>
                <TipoText>Estratégia</TipoText>
                <Cards>
                    <CardComponent isPink icon={Clans} title="Clash of Clans" price="R$50,00"/>
                    <CardComponent icon={Royale} title="Clash Royale" price="R$50,00"/>
                </Cards>
            </Main>        
            <MenuComponent/>
        </HomeDiv>
    );
}