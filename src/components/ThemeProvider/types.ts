export interface ThemeProviderProps {
  themeId: "dark" | "light";
  children: React.ReactNode;
  as: any;
  [key: string]: any;
}

export interface ThemeContextValuePropsType {
  themeId?: string;
}
