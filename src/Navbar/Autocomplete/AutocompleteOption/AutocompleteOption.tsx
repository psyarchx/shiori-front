import * as S from './styles';
import { FC } from 'react';
import { Book } from '../../../utils/types';
import DefaultImg from '../../../assets/defaultbook.png'

const AutocompleteOption:  FC<{ book: Book }> = ({ book }) => {
	const { id, title, img, tags, info } = book;
	return (
		<S.AutocompleteOptionWrapper>
			<S.AutcompleteImage src={img || DefaultImg} alt={title} />
			<S.AutocompleteOptionInformationWrapper>
				<S.AutocompleteOptionTitle>{title}</S.AutocompleteOptionTitle>
				<S.AutocompleteOptionInfo>{info}</S.AutocompleteOptionInfo>
				<S.AutocompleteOptionTags>
					Tags:
					{tags?.map((tag: string, index: number) => (
						<span key={`${id}-tag-${index}`}>
							{index > 0 ? ', ' : ' '}
							{tag}
						</span>
					))}
				</S.AutocompleteOptionTags>
			</S.AutocompleteOptionInformationWrapper>
		</S.AutocompleteOptionWrapper>
	);
}

export default AutocompleteOption;