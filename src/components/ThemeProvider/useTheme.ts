import { useContext } from "react";
import { ThemeContext } from ".";
import { ThemeContextValuePropsType } from "./types";

export function useTheme(): ThemeContextValuePropsType {
	const currentTheme: ThemeContextValuePropsType = useContext(ThemeContext);
	return currentTheme;
}
