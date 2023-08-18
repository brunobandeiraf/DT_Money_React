import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        {/* <NewTransactionButton>Nova transação</NewTransactionButton> */}
        {/* Abrir o modal importado da lib Radix */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* asChild - aproveita o botão já criado */}
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          {/*  
            Portal fornece uma forma elegante de renderizar um elemento filho dentro 
            de um nó DOM que exista fora da hierarquia do componente pai
            - Coloca o modal fora dos componentes e sobrepões todos
          */}
          <Dialog.Portal>
            {/* Overlay - Fundo preto */}
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              {/* botão para fechar */}
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}