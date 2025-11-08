import { ReactNode } from 'react';
import { SidebarNavigation } from './SidebarNavigation';
import { TopBar } from './TopBar';
import { ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/notifications/Toaster';
import { useAppStore } from '@/stores/appStore';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { sidebarCollapsed } = useAppStore();

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background">
        <SidebarNavigation />
        <TopBar />
        <main
          className="pt-20 min-h-screen transition-all duration-300"
          style={{ marginLeft: sidebarCollapsed ? '80px' : '280px' }}
        >
          <div className="p-8">
            {children}
          </div>
        </main>
        <Toaster />
      </div>
    </ToastProvider>
  );
}
