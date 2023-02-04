export interface Theme {
  colors: {
    lightCyan: string;
    neonGreen: string;
    grayishBlue: string;
    darkGrayishBlue: string;
    darkBlue: string;
  }
}

export const defaultTheme: Theme = {
  colors: {
    lightCyan: "#CEE3E9",
    neonGreen: "#52FFA8",
    grayishBlue: "#4E5D73",
    darkGrayishBlue: "#323A49",
    darkBlue: "#1F2632",
  }
}