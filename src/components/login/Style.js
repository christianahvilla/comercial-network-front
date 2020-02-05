import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
    },
    card: {
        height: 'auto',
        marginBottom: 'auto',
        padding: 10,
        position: 'relative',
        marginTop: '15%',
    },
    button: {
        maxWidth: 200,
        minWidth: 50,
        float: 'right',
        marginBottom: theme.spacing(3),
        textTransform: 'none',
    },
    recoverPassowrd: {
        textTransform: 'none',
        fontSize: 12,
    },
    cardActions: {
        display: 'block',
    },
}));

export default useStyles;
