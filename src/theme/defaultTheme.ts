export interface Theme {
  colors: {
    primary: {
      lightCyan: string;
      neonGreen: string;
      red: string;
    };
    neutral: {
      grayishBlue: string;
      darkGrayishBlue: string;
      darkBlue: string;
    };
  };
  fonts: {
    manrope: string;
  };
}

export const defaultTheme = {
  colors: {
    primary: {
      lightCyan: "#CEE3E9",
      neonGreen: "#52FFA8",
      red: "hsl(0, 100%, 66%)",
    },
    neutral: {
      grayishBlue: "#4E5D73",
      darkGrayishBlue: "#323A49",
      darkBlue: "#1F2632",
    }
  },
  fonts: {
    manrope: 'Manrope',
  }
}