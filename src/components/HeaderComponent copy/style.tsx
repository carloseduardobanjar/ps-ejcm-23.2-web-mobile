import styled from  'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    background: white;
    position: fixed;
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid #D0D0D0;
    border-radius: 10px;    
`;

export const Logo = styled.img`
    width: 40px;
`;

export const Title = styled.h1`
    color: rgb(185, 70, 255);
`;

export const Esquerda = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
`;