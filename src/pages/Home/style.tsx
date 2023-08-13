import styled from  'styled-components'

interface CategoriaProps {
    selected?: boolean;
}

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
`;

export const Main = styled.div`
    margin-top: 12vh;
    margin-bottom: 12vh;
`;

export const Topo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Line = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Input = styled.div`
    display: flex;
    border: 1px solid #AAAAAA;
    border-radius: 30px;
    height: 40px;
    width: 70vw;
    align-items: center;
`;

export const InputIcon = styled.img`
    width: 25px;
    padding-left: 20px;
`;

export const InputText = styled.p`
    color: #AAAAAA;
    padding-left: 10px;
    
`;

export const IconCarrinho = styled.img`
    padding-left: 10px;
`;

export const Categorias = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 5px;
`;

export const Opcao = styled.div<CategoriaProps>`
    display: flex;
    justify-content: center;
    border:  ${(props) => props.selected ? "" : "1px solid #AAAAAA"};
    border-radius: 20px;
    padding: 10px;
    min-width: 90px; 
    background: ${(props) => props.selected ? "#E1E1E1" : "white"};
`;

export const TipoText = styled.h2`
    color: #AAAAAA;
    
`;

export const Cards = styled.div`
    display: flex;
    margin-top: 2vh;
    padding: 0 9vw;
    width: 70vw;
    overflow-x: scroll;
`;



