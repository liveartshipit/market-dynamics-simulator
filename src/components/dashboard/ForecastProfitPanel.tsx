import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppStore } from '@/stores/appStore';
import { motion } from 'framer-motion';

const forecastData = [
  { month: 'Jan', profit: 4500 },
  { month: 'Feb', profit: 5200 },
  { month: 'Mar', profit: 4800 },
  { month: 'Apr', profit: 6100 },
  { month: 'May', profit: 7200 },
  { month: 'Jun', profit: 6800 },
];

export function ForecastProfitPanel() {
  const { addNotification } = useAppStore();

  const handleExport = () => {
    addNotification('Profit forecast exported successfully', 'success');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="p-6 bg-card text-card-foreground border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Forecasted Profit</h2>
          <Button
            size="sm"
            onClick={handleExport}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <div className="h-64 w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 15%, 90%)" />
              <XAxis dataKey="month" stroke="hsl(210, 15%, 15%)" />
              <YAxis stroke="hsl(210, 15%, 15%)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(0, 0%, 100%)', 
                  border: '1px solid hsl(210, 15%, 90%)',
                  color: 'hsl(210, 15%, 15%)'
                }}
              />
              <Bar dataKey="profit" fill="hsl(192, 90%, 48%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
          <div>
            <p className="text-xs text-muted-foreground">Avg. Profit</p>
            <p className="text-lg font-bold text-foreground">$5,767</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Peak Month</p>
            <p className="text-lg font-bold text-foreground">May</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Growth</p>
            <p className="text-lg font-bold text-success">+18.2%</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
