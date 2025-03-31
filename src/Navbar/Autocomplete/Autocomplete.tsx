import { useState } from 'react';
import AutocompleteOption from './AutocompleteOption/AutocompleteOption';
import { Book } from '../../utils/types';
import * as S from './styles';

const Autocomplete = () => {
	const [isAutocompleteLoading, setIsAutocompleteLoading] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [books, setBooks] = useState<Book[]>([]);

	const fetchResults = async (query: string) => {
		if (!query) {
			return
		}

		setIsAutocompleteLoading(true);

		try {
			//TO DO: Change to API
			setBooks(
				[
					{
						id: 1,
						title: 'Books books',
						info: "Pellentesque nec nulla ligula. Donec gravida turpis a vulputate  ultricies. Posuere libero varius. Nullam a nisl ut ante blandit  hendrerit. Aenean sit amet nisi. Vehicula non. Ut sed ex eros. Vivamus  sit amet nibh non tellus tristique interdum.",
						tags: ['test', 'test'],
						pageLink: 'teste',
						img: ''
					},
					{
						id: 2,
						title: 'Books books',
						tags: ['test', 'test'],
						info: "Pellentesque nec nulla ligula. Donec gravida turpis a vulputate  ultricies. Posuere libero varius. Nullam a nisl ut ante blandit  hendrerit. Aenean sit amet nisi. Vehicula non. Ut sed ex eros. Vivamus  sit amet nibh non tellus tristique interdum.",
						pageLink: 'teste',
						img: ''
					},
					{
						id: 3,
						title: 'Books books',
						info: "Pellentesque nec nulla ligula. Donec gravida turpis a vulputate  ultricies. Posuere libero varius. Nullam a nisl ut ante blandit  hendrerit. Aenean sit amet nisi. Vehicula non. Ut sed ex eros. Vivamus  sit amet nibh non tellus tristique interdum.",
						tags: ['test', 'test'],
						pageLink: 'teste',
						img: ''
					},
					{
						id: 4,
						title: 'Books books',
						info: "Pellentesque nec nulla ligula. Donec gravida turpis a vulputate  ultricies. Posuere libero varius. Nullam a nisl ut ante blandit  hendrerit. Aenean sit amet nisi. Vehicula non. Ut sed ex eros. Vivamus  sit amet nibh non tellus tristique interdum.",
						tags: ['test', 'test'],
						pageLink: 'teste',
						img: ''
					},
					{
						id: 5,
						title: 'Books books',
						info: "Pellentesque nec nulla ligula. Donec gravida turpis a vulputate  ultricies. Posuere libero varius. Nullam a nisl ut ante blandit  hendrerit. Aenean sit amet nisi. Vehicula non. Ut sed ex eros. Vivamus  sit amet nibh non tellus tristique interdum.",
						tags: ['test', 'test'],
						pageLink: 'teste',
						img: ''
					},
				]
			)
		} catch (error) {
			console.error(error)
		} finally {
			setIsAutocompleteLoading(false);
		}
	}
	return (
		<S.NavbarAutocompleteSearch
			freeSolo
			loading={isAutocompleteLoading}
			options={books}
			getOptionLabel={(option) => (option as Book).title}
			filterOptions={(x) => x}
			onInputChange={(_, newInputValue) => {
				setInputValue(newInputValue);
				fetchResults(newInputValue);
			}}
			onChange={(_, value) => {
				if (value && typeof value !== 'string') {
					// link to book
				}
			}}
			renderInput={(params) => (
				<S.NavbarAutocompleteSearchTextField
					{...params}
					placeholder="Search by title, author, tags..."
					variant="outlined"
					size="small"
				/>
			)}
			renderOption={(props, option) => (
				<AutocompleteOption book={option as Book} />
			)}
			noOptionsText={inputValue ? "Nenhum produto encontrado" : "Digite para buscar"}
		/>
	);
}

export default Autocomplete;