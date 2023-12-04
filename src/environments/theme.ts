import { PaletteMode } from '@mui/material';



const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#f2f2f2",
    200: "#e6e6e6",
    300: "#d9d9d9",
    400: "#cdcdcd",
    500: "#c0c0c0",
    600: "#9a9a9a",
    700: "#737373",
    800: "#4d4d4d",
    900: "#262626",
    1000: "#000000", // manually adjusted

  },
  primary: {
    100: "#d4d4d5",
    200: "#a9a9aa",
    300: "#7e7e80",
    400: "#535355",
    500: "#28282b",
    600: "#202022",
    700: "#18181a",
    800: "#101011",
    900: "#080809"
},
  secondary: {
    100: "#fff2cc",
    200: "#ffe699",
    300: "#ffd966",
    400: "#ffcd33",
    500: "#ffc000",
    600: "#cc9a00",
    700: "#997300",
    800: "#664d00",
    900: "#332600"
},
};


//function that reverses color palette
function reverseTokens(tokensDark:{}) {
    const reversedTokens :any = {};
    Object.entries(tokensDark).forEach(([key, val]:any) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj:any = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }



  const tokensLight = reverseTokens(tokensDark);


  //mui theme settings

  const themeSettings = (mode:PaletteMode)=>{
    return {
        palette: {
          mode: mode,
          ...(mode === "dark"
            ? {
                // palette values for dark mode
                primary: {
                  ...tokensDark.primary,
                  main: tokensDark.primary[400],
                  light: tokensDark.primary[400],
                },
                secondary: {
                  ...tokensDark.secondary,
                  main: tokensDark.secondary[300],
                },
                neutral: {
                  ...tokensDark.grey,
                  main: tokensDark.grey[500],
                },
                background: {
                  default: tokensDark.primary[600],
                  alt: tokensDark.primary[500],
                  darker: tokensDark.primary[400],
                },
              }
            : {
                // palette values for light mode
                primary: {
                  ...tokensLight.primary,
                  main: tokensDark.grey[50],
                  light: tokensDark.grey[100],
                },
                secondary: {
                  ...tokensLight.secondary,
                  main: tokensDark.secondary[600],
                  light: tokensDark.secondary[700],
                },
                neutral: {
                  ...tokensLight.grey,
                  main: tokensDark.grey[500],
                },
                background: {
                  default: tokensDark.grey[0],
                  alt: tokensDark.grey[50],
                  darker: tokensDark.grey[100],
                },
              }),
        },
        typography: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 12,
          h1: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 40,
          },
          h2: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 32,
          },
          h3: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 24,
          },
          h4: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 20,
          },
          h5: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 16,
          },
          h6: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 14,
          },
        },
    }
  }

  export {
    themeSettings,
  }