import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      {/*  TransactionsProvider armazena as funções para manipulação do array de transações*/}
      <TransactionsProvider>
          <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
