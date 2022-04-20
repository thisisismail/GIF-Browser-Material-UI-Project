import React from 'react'
import AppBar from '@mui/material/AppBar'
import { ThemeProvider, styled, Stack, Tabs, Tab } from '@mui/material/';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import SearchBarComp from '../../components/SearchBarComp.js'
import themeKoe from '../../materialUI/theme/index.js';
import ContentSecOrdinary from '../content/ordinary/index.js';
import ContentSecTrending from '../content/trending/index.js';
import Home from '../content/home/index.js';

const AppBarStyled = styled(AppBar)(({ theme }) =>({
  backgroundColor: theme.palette.background.paper,
}))

export default function AppBarSec() {

  const [value, setValue] = React.useState('/ordinary');
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    const url = window.location.pathname;
    setValue(url)
  }, [click]);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <div>
      <ThemeProvider theme={themeKoe}>
        <BrowserRouter>

          <AppBarStyled>
            <Stack spacing={0} direction="row">
              <Tabs value={value} aria-label="nav tabs example">  
                <Tab
                  onClick={handleClick}
                  label="GIPHY"
                  value={"/"}
                  component={Link}
                  to={"/"}
                />
                <SearchBarComp/>
                <Tab
                  onClick={handleClick}
                  label="Ordinary"
                  value={"/ordinary"}
                  component={Link}
                  to={"/ordinary"}
                />
                <Tab
                  onClick={handleClick}
                  label="Trending"
                  value={"/trending"}
                  component={Link}
                  to={"/trending"}
                />
              </Tabs>
            </Stack>
          </AppBarStyled>

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/ordinary" element={ <ContentSecOrdinary /> } />
            <Route path="/trending" element={ <ContentSecTrending /> } />
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
