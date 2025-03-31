import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const AutocompleteOptionWrapper = styled(Box)`
    padding: 6px 16px;
    display: flex;
	border-bottom: 1px solid black;
`;

export const AutocompleteOptionInformationWrapper = styled(Box)`
    margin-left: 4px;
`;

export const AutocompleteOptionTitle = styled(Typography)`
    && {
		font-size: 16px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
	}
`;

export const AutocompleteOptionInfo = styled(Typography)`
	&& {
		font-size: 12px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
	}
`;

export const AutocompleteOptionTags = styled(Typography)`
	&& {
		font-size: 12px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
	}
`;

export const AutcompleteImage = styled.img`
    max-width: 71px;
    max-heigth: 75px;

`;