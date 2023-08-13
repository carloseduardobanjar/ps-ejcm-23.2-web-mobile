import { BotaoCard, Card, ImageCard, PrecoCard, TitleCard } from "./style";

type CardProps = {
    isPink?: boolean;
    icon: string;
    title: string;
    price: string;
}


export default function CardComponent({isPink, icon, title, price} : CardProps) {
    return(
        <Card pink={isPink ? true : false} >
            <ImageCard src={icon}/>
            <TitleCard> {title} </TitleCard>
            <PrecoCard> {price} </PrecoCard>
            <BotaoCard>Carrinho</BotaoCard>
        </Card>
    );
}