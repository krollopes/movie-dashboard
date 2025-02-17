'use client';
import { darkTheme, GlobalStyle, lightTheme } from '@/lib/styled-components';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      {children}
    </ThemeProvider>
  );
}
