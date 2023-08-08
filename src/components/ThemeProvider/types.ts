export interface ThemeProviderProps {
  themeId: "dark" | "light";
  children: React.ReactNode;
  as: string;
  [key: string]: any;
}

export interface ThemeContextValuePropsType {
  themeId?: string;
}
