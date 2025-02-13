export interface ThemeColors {
	cream:		string,
	khaki:		string,
	tan:		string,
	peach:		string,
	peachPuff: 	string
};

export interface ThemeSizing {
	spacing: {
	  xs: string;
	  sm: string;
	  md: string;
	  lg: string;
	  xl: string;
	};
}

export interface ThemeTypography {
	fontFamily: string;
	fontSize: {
	  xs: string;
	  sm: string;
	  md: string;
	  lg: string;
	  xl: string;
	  xxl: string;
	};
	fontWeight: {
	  light: number;
	  regular: number;
	  medium: number;
	  bold: number;
	};
}

export interface Theme {
	colors: ThemeColors;
	sizing: ThemeSizing;
	typography: ThemeTypography;
}