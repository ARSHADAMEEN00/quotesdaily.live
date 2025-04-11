import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Footer from './footer';
import Header from './header';
import { motion } from 'framer-motion';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const homePage = true;

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: 1 }}>
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
          borderRadius: '50%',
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <Header />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ...(!homePage && {
              pt: { xs: 8, md: 10 },
            }),
          }}
        >
          {children}
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
