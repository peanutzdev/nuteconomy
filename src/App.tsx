import { MantineProvider } from '@mantine/core';
import Main from './Main';
import './App.css';

export default function App() {
  return (
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        // Override any other properties from default theme
        headings: {
          sizes: {
            h2: { fontSize: '3rem', },
          }
        },
        // Override button styles
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params) => ({
              root: {
                borderRadius: 20,
                color: params.color === 'light' ? 'white' : 'white',
                backgroundColor: params.color === 'light' ? '#F95738' : '#F95738',
                '&:hover': { 
                  backgroundColor: params.variant === 'filled'
                    ? '#FF2900'
                    : '#FF2900'
                }
              },
            }),
          },
        },
      }}
    >
      <Main />
    </MantineProvider>
  );
}
