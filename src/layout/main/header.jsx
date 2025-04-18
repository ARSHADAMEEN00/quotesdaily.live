import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';


import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import { paths } from '../../routes/routes/paths';
import { useOffSetTop } from '../../hooks/use-off-set-top';
import { useResponsive } from '../../hooks/use-responsive';
import { bgBlur } from '../../theme/css';
import Logo from '../../components/logo';
import Label from '../../components/label';
import HeaderShadow from './header-shadow';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container maxWidth="xl" sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
          // badgeContent={
          //   <Link
          //     href={paths.changelog}
          //     target="_blank"
          //     rel="noopener"
          //     underline="none"
          //     sx={{ ml: 1 }}
          //   >
          //     <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
          //       v5.7.0
          //     </Label>
          //   </Link>
          // }
          >
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
              Purchase Now
            </Button>


            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
