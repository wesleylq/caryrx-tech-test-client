import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Bar from '../../components/Bar';
import Grid from '@mui/material/Grid';
import { styles } from './styles';
import MedicineTable from '../../components/MedicineTable';
import Pie from '../../components/Pie';
import Funnel from '../../components/Funnel';

const AppBar = styled(MuiAppBar)();

const mdTheme = createTheme();

function Dashboard() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={styles.box}
        >
          <Toolbar />
          <Grid container
            direction="row"
            alignItems="center">

            <Grid sx={styles.grid}>
              <Bar />
            </Grid>

            <Grid sx={styles.grid}>
              <Pie />
            </Grid>

            <Grid sx={styles.grid}>
              <Funnel />
            </Grid>
          </Grid>

          <Grid sx={{ margin: 20 }}>
            <MedicineTable />
          </Grid>

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;