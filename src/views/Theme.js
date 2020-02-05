import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#0C61FF',
            light: '#2672FF',
            dark: '#0441B3',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FF730A',
            dark: '#ba000d',
            light: '#ff8f3b',
            contrastText: '#000000',
        },
    },
});

export default mainTheme;
