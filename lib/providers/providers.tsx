// app/providers.tsx
'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  );
}