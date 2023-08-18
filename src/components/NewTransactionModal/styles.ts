import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

// Overlay é o nome da lib radix 
// Pode colocar qualquer nome no componente e herda as característica do Overlay da lib
export const Overlay = styled(Dialog.Overlay)`
    position: fixed; // sempre na mesma posição da tela
    width: 100vw;
    height: 100vh;
    inset: 0; // top: 0; bottom: 0; left: 0; right: 0
    background: rgba(0, 0, 0, 0.75); // Fundo transparente
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem; // 2.5 cima e baixo, e 3 nas laterais
    background: ${props => props.theme["gray-800"]};
    
    position: fixed; // daqui pra baixo centraliza
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // centralizar 

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

    input {
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }
    }

    button[type="submit"] { // Do tipo submit
        height: 50px;
        border: 0;
        background: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.25rem;
        cursor: pointer;

        &:hover {
            background: ${props => props.theme["green-700"]};
            transition: background-color 0.2s;
        }
    }
  }
`;

// Lib se chama Dialog.Close
// Componente reescrito para CloseButton
export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0; // Ajustar o tamanho do item com o foco
    cursor: pointer;
    color: ${props => props.theme["gray-500"]};
`;