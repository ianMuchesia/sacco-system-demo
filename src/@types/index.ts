
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

export type VehicleData = {
  vehicle: {
    _id: number;
    category: string;
    model: string;
    price: number;
    rating: number;
    description: string;
    supply: number;
  };
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
};

export type MemberData = {
  memberId: number;
  fullName: string;
  dateOfBirth: string; // You might want to use a Date type if working with dates
  contactInformation: string;
  savingsBalance: number;
};




export type TransactionMemberData = {
  memberId: number;
  fullName: string;
  dateOfBirth: string;
  contactInformation: string;
  savingsBalance: number;
  payment: {
    paymentMethod: string;
    transactionId: string;
    amount: number;
    paymentDate: string;
  };
};