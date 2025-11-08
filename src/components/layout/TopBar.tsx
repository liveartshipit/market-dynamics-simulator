import { BellIcon, SearchIcon, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAppStore } from '@/stores/appStore';

export function TopBar() {
  const { sidebarCollapsed } = useAppStore();

  return (
    <header
      className="fixed top-0 right-0 h-20 bg-card border-b border-border z-40 flex items-center px-6 gap-4"
      style={{ left: sidebarCollapsed ? '80px' : '280px' }}
    >
      <div className="flex-1 max-w-md">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="SearchIcon topics, lessons..."
            className="pl-10 bg-background text-foreground border-border"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <BellIcon className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <UserIcon className="h-5 w-5" />
        </Button>

        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
