import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiThemeProvider } from '@material-ui/core';
import { store, persistor } from './store';
import Router from './router/Router';
import mainTheme from './views/Theme';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MuiThemeProvider theme={mainTheme}>
                    <Router />
                </MuiThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
