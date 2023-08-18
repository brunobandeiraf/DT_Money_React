import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";

import { CloseButton, Content, Overlay } from './styles';

export function NewTransactionModal() {
  return (
    //Abrir o modal importado da lib Radix 
    /*  
        Portal fornece uma forma elegante de renderizar um elemento filho dentro 
        de um nó DOM que exista fora da hierarquia do componente pai
        - Coloca o modal fora dos componentes e sobrepões todos
    */
    <Dialog.Portal>
        {/* Overlay - Fundo preto */}
        <Overlay /> 

        <Content>
            <Dialog.Title>Nova Transação</Dialog.Title>

            <CloseButton>
                <X size={24} />
                {/* x é o ícone do phosphor */}
            </CloseButton>

            <form>
                <input type="text" placeholder="Descrição" required />
                <input type="number" placeholder="Preço" required />
                <input type="text" placeholder="Categoria" required />

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </Content>
    </Dialog.Portal>
  );
}