import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUpIcon, TrendingDownIcon, ActivityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function MarketSnapshotCard() {
  const metrics = [
    { label: 'GDP Growth', value: '2.4%', trend: 'up', color: 'success' },
    { label: 'Inflation Rate', value: '3.2%', trend: 'down', color: 'warning' },
    { label: 'Market Activity', value: 'High', trend: 'neutral', color: 'primary' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-card text-card-foreground border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Real-time Market Snapshot</h2>
          <ActivityIcon className="h-6 w-6 text-primary" />
        </div>

        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                {metric.trend === 'up' && <TrendingUpIcon className="h-5 w-5 text-success" />}
                {metric.trend === 'down' && <TrendingDownIcon className="h-5 w-5 text-destructive" />}
                {metric.trend === 'neutral' && <ActivityIcon className="h-5 w-5 text-primary" />}
                <span className="font-medium text-foreground">{metric.label}</span>
              </div>
              <Badge 
                variant="secondary"
                className={`${
                  metric.color === 'success' ? 'bg-success text-success-foreground' :
                  metric.color === 'warning' ? 'bg-warning text-warning-foreground' :
                  'bg-primary text-primary-foreground'
                }`}
              >
                {metric.value}
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-transparent text-foreground border-border">Supply: Stable</Badge>
          <Badge variant="outline" className="bg-transparent text-foreground border-border">Demand: Increasing</Badge>
          <Badge variant="outline" className="bg-transparent text-foreground border-border">Elasticity: Moderate</Badge>
        </div>
      </Card>
    </motion.div>
  );
}
