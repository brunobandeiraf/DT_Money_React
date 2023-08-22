import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {

    // Contexto instanciado para ter acesso ao array de transações
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

    // .reduce percorre o array a alguma estrutura de dados
    // { income: 0, outcome: 0, total: 0 }
    // .reduce(() => {}, { income: 0, outcome: 0, total: 0 })
    // 
    const summary = transactions.reduce(
        (acc, transaction) => { 
        // acc é o estado inicial
        // transaction é cada interação
        if (transaction.type === 'income') {
            acc.income += transaction.price;
            acc.total += transaction.price;
        } else {
            acc.outcome += transaction.price;
            acc.total -= transaction.price;
        }

        return acc;
        },
        {
        income: 0,
        outcome: 0,
        total: 0,
        },
    );

    return summary;
}