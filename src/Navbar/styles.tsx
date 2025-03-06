import styled from "styled-components";
import { Box, Typography, Autocomplete, TextField } from "@mui/material";

export const NavbarWrapper = styled(Box)`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.peachPuff};
	height: 64px;
`;

export const NavbarContentWrapper = styled(Box)`
	max-width: 1440px;
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	padding: 0 32px;
	align-items: center;
`;

export const NavbarTitle = styled(Typography)`
	&& {
		font-family: "Architects Daughter", serif;
		font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
		font-style: normal;
		font-size: 2.25rem;
	}
`;