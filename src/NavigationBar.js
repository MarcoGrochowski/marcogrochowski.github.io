import * as React from "react";

import Box from '@mui/material/Box';
import {AppBar, Toolbar, Typography} from "@mui/material";
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styled from '@emotion/styled'
import { Link, matchPath, useLocation } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background: #eceff1;
  margin: 0px;
`

const theme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    "& .MuiTabs-indicator": {
                        backgroundColor: "#607d8b",
                        height: 3,
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root:{
                    "&.Mui-selected": {
                        backgroundColor: "#eceff1",
                        color: "#607d8b",
                        borderRadius: "25px"
                    }
                }
            }
        }
    }
});

function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

function NavigationBar() {
    const routeMatch = useRouteMatch(['/blog', '/contact', '/']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <ThemeProvider theme={theme}>
            <StyledAppBar position={"fixed"}>
                <Container maxWidth={"xl"}>
                    <Toolbar disableGutters>
                        <Tabs value={currentTab}>
                            <Tab label={"Home"} value={"/"} to={"/"} component={Link} />
                            <Tab label={"Blog"} value={"/blog"} to={"/blog"} component={Link} />
                            <Tab label={"Contact"} value={"/contact"} to={"/contact"} component={Link} />
                        </Tabs>
                    </Toolbar>
                </Container>
            </StyledAppBar>
            <Toolbar />
        </ThemeProvider>
    );
}

export default NavigationBar;