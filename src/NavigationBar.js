import * as React from "react";

import Box from '@mui/material/Box';
import {AppBar, Toolbar, Typography} from "@mui/material";
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styled from '@emotion/styled'
import { Link, matchPath, useLocation } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background: #929292;
`

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
        <StyledAppBar position={"static"}>
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
    );
}

export default NavigationBar;