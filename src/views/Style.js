import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const mainStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: '100%',
    },
    title: {
        padding: theme.spacing(1),
        color: '#1A76D2',
        textAlign: 'center',
    },
    rootHeader: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: 'white!important',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    headerUser: {
        display: 'flex',
        float: 'left',
        padding: '16px 8px',
        flex: '0 0 auto',
        marginTop: 'auto',
        marginRight: 'auto',
        color: '#515151',
    },
    link: {
        textDecoration: 'none',
        color: '#1F1F1F',
    },
    four: {
        color: '#A1A1A1',
        fontSize: 250,
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: 125,
        },
        height: 'fit-content',
        margin: 0,
    },
    notFound: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        justifyContent: 'center',
    },
    img: {
        [theme.breakpoints.between('xs', 'sm')]: {
            width: 100,
            height: 100,
        },
        width: 230,
        height: 230,
    },
    messageFound: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'grid',
        color: '#0441B3',
    },
    legendFound: {
        width: 645,
        textAlign: 'justify',
    },
    progress: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px!important',
    },
    defaultTitle: {
        color: '#0441B3',
    },
    defaultSubTitle: {
        color: '#707070',
    },
    chartPaper: {
        height: '100%',
        padding: '0px 15px',
    },
}));

export default mainStyles;
