import { useEffect } from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useAppStore } from '@/stores/appStore';
import { CheckCircle2Icon, AlertCircleIcon, InfoIcon } from 'lucide-react';

export function Toaster() {
  const { notifications, removeNotification } = useAppStore();

  return (
    <>
      {notifications.map((notification) => {
        const Icon = notification.type === 'success' 
          ? CheckCircle2 
          : notification.type === 'error' 
          ? AlertCircle 
          : InfoIcon;

        return (
          <Toast key={notification.id} className="bg-card text-card-foreground border-border">
            <div className="flex items-start gap-3">
              <Icon className={`h-5 w-5 mt-0.5 ${
                notification.type === 'success' ? 'text-success' :
                notification.type === 'error' ? 'text-destructive' :
                'text-primary'
              }`} />
              <div className="flex-1">
                <ToastTitle className="text-foreground">
                  {notification.type === 'success' ? 'Success' :
                   notification.type === 'error' ? 'Error' : 'Info'}
                </ToastTitle>
                <ToastDescription className="text-muted-foreground">
                  {notification.message}
                </ToastDescription>
              </div>
            </div>
            <ToastClose onClick={() => removeNotification(notification.id)} />
          </Toast>
        );
      })}
      <ToastViewport />
    </>
  );
}
