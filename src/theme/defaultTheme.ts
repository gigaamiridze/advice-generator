export interface Theme {
  colors: {
    lightCyan: string;
    neonGreen: string;
    grayishBlue: string;
    darkGrayishBlue: string;
    darkBlue: string;
    red: string;
  },
  fonts: {
    manrope: string;
  }
}

export const defaultTheme: Theme = {
  colors: {
    lightCyan: "#CEE3E9",
    neonGreen: "#52FFA8",
    grayishBlue: "#4E5D73",
    darkGrayishBlue: "#323A49",
    darkBlue: "#1F2632",
    red: "hsl(0, 100%, 66%)",
  },
  fonts: {
    manrope: 'Manrope',
  }
}