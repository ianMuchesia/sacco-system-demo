
import { ReactNode } from "react";


export type alertColor = "error" | "warning" | "info" | "success";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

type PaletteModeType = 'light' | 'dark';

export interface ThemeOptions {
  palette: {
    primary: any;
    secondary: any;
    neutral: any;
    background: {
      default: string;
      alt: string;
    };
    mode?: PaletteModeType;
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontFamily: string;
      fontSize: number;
    };
    h6: {
      fontFamily: string;
      fontSize: number;
    };
  };
}

export type CardStatsVerticalProps = {
  title: string
  stats: string
  icon: ReactNode
  subtitle: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}

