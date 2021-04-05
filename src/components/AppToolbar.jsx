import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, AppBar, Icon, Toolbar, Typography, Button, IconButton, createMuiTheme, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#004d40',
    }
  }
});

function AppToolbar(){
	const classes = useStyles();
	return(
		<ThemeProvider theme={theme}>
			<div className={classes.root} color="primary">
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
						      TIW8 - YassineAMG
						</Typography>
						<Icon>add_circle</Icon>
					</Toolbar>
				</AppBar>
			</div>
		</ThemeProvider>
	);
}

export default AppToolbar;
