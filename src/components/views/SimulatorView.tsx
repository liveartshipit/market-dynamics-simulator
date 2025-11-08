import { SimulationPanel } from '../dashboard/SimulationPanel';
import { ElasticityCalculator } from '../dashboard/ElasticityCalculator';
import { Card } from '@/components/ui/card';
import { InfoIcon } from 'lucide-react';

export function SimulatorView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Market Simulator</h1>
        <p className="text-muted-foreground">Adjust supply and demand to see real-time market equilibrium changes</p>
      </div>

      <Card className="p-6 bg-gradient-2 border-0">
        <div className="flex items-start gap-4">
          <InfoIcon className="h-6 w-6 text-white flex-shrink-0 mt-1" />
          <div className="text-white">
            <h3 className="font-bold mb-2">How to use the simulator</h3>
            <p className="text-sm text-white/90">
              Move the supply and demand sliders to see how market equilibrium changes. 
              The intersection point represents the equilibrium price and quantity where supply meets demand.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SimulationPanel />
        </div>
        <div>
          <ElasticityCalculator />
        </div>
      </div>
    </div>
  );
}
