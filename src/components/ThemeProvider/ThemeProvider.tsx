import React, { createContext } from "react"
import { theme } from "./theme"
import { useTheme } from "."
import { ThemeContextValuePropsType, ThemeProviderProps } from "./types";
import Head from "next/head";
import { classes } from "@/utils/style";

export const ThemeContext = createContext({});

export const ThemeProvider = ({
	themeId = 'dark',
	children,
	className,
	as: Component = 'div',
	...rest
}: ThemeProviderProps) => {
	const currentTheme = { ...theme[themeId] };
	const parentTheme = useTheme();
	const isRootProvider = !parentTheme?.themeId;

	return (
		<ThemeContext.Provider value={currentTheme}>
			{isRootProvider && (
				<>
					<Head>
						<meta name="theme-color" content={`rgb(${currentTheme.rgbBackground})`} />
					</Head>
					{children}
				</>
			)}
			{!isRootProvider && (
				<Component
					className={classes('theme-provider', className)}
					data-theme={themeId}
					{...rest}
				>
					{children}
				</Component>
			)}
		</ThemeContext.Provider>
	)
}
