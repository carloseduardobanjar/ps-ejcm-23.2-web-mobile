import styled from  'styled-components'

interface CardProps {
    pink?: boolean;
}

export const Card = styled.div<CardProps>`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.pink ? "rgba(253, 74, 224, 0.2)" : "rgba(185, 70, 255, 0.2)"};
    width: 180px;
    border-radius: 20px;
    margin-right: 15px;
`;

export const ImageCard = styled.img`
    margin-top: 20px;
    width: 150px;
`;

export const TitleCard = styled.h3`
    color: #AAAAAA;
    margin-bottom: 0px;
`;

export const PrecoCard = styled.p`
    color: #AAAAAA;
`;

export const BotaoCard = styled.button`
    border: 0;
    background: white;
    border-radius: 20px;
    font-size: 15px;
    color: #AAAAAA;
    margin-bottom: 20px;
    height: 30px;
    padding-right: 15px;
    padding-left: 15px;
`;