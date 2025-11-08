import { BarChart3Icon, BookOpenIcon, CreditCardIcon, DownloadIcon, HomeIcon, MenuIcon, SettingsIcon, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAppStore } from '@/stores/appStore';
import { motion } from 'framer-motion';

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: HomeIcon },
  { id: 'simulator', label: 'Simulator', icon: BarChart3Icon },
  { id: 'learning', label: 'Learning Hub', icon: BookOpenIcon },
  { id: 'flashcards', label: 'Flashcards', icon: CreditCardIcon },
  { id: 'export', label: 'Data Export', icon: DownloadIcon },
];

export function SidebarNavigation() {
  const { sidebarCollapsed, currentView, setCurrentView, toggleSidebar } = useAppStore();

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarCollapsed ? '80px' : '280px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen bg-card border-r border-border z-50"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 h-20">
          {!sidebarCollapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-bold text-foreground"
            >
              Market Dynamics
            </motion.h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>

        <Separator />

        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full justify-start ${
                    isActive
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => {
                    setCurrentView(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </Button>
              );
            })}
          </nav>
        </ScrollArea>

        <Separator />

        <div className="p-4 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <SettingsIcon className="h-5 w-5 mr-3" />
            {!sidebarCollapsed && <span>SettingsIcon</span>}
          </Button>
          
          <div className="flex items-center gap-3 p-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
