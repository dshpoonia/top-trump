import {createTheme} from '@mui/material/styles';
import {green, purple} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontSize: 12,
        h3: {
            fontSize: '2.8rem',
            '@media (min-width:600px)': {
                fontSize: '2.8rem',
            },
        }
    },
});
