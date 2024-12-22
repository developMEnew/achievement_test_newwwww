import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Library } from './pages/Library';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';

// iOS-inspired theme
const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#007AFF',
    },
    background: {
      default: '#F2F2F7',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Box sx={{ 
            pb: '64px',
            minHeight: '100vh',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}>
            <Routes>
              <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              <Route path="/search" element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              } />
              <Route path="/library" element={
                <ProtectedRoute>
                  <Library />
                </ProtectedRoute>
              } />
              <Route path="/notifications" element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <BottomNav />
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;