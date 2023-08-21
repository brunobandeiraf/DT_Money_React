import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
});

// Retornar as tipagens do schema
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, // formato em estado de submit ou não (true ou false)
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}