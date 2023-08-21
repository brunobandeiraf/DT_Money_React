import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from 'react';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from 'react-hook-form';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import * as z from 'zod';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

// Formato do zod
const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});
// Definindo a tipagem
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

    const { createTransaction } = useContext(TransactionsContext);

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    // Criar nova Transação
    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data;

        await createTransaction({
            description,
            price,
            category,
            type,
        });

        reset(); // resetar o formulário
    }

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

            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input
                    type="text"
                    placeholder="Descrição"
                    required
                    {...register('description')}
                />
                <input
                    type="number"
                    placeholder="Preço"
                    required
                    {...register('price', { valueAsNumber: true })} // converte para número
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    required
                    {...register('category')}
                />

                <Controller
                    control={control}
                    name="type" 
                    render={({ field }) => { // render é uma função que retorna o conteúdo html
                        return (
                            <TransactionType
                                onValueChange={field.onChange} // sempre que o valor mudar - radix
                                value={field.value}
                            >
                            <TransactionTypeButton variant="income" value="income">
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransactionTypeButton>
                            </TransactionType>
                        )
                    }}
                />
                
                <button type="submit" disabled={isSubmitting}>
                    Cadastrar
                </button>
            </form>
        </Content>
    </Dialog.Portal>
  );
}