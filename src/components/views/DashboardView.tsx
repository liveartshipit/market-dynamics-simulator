import { MarketSnapshotCard } from '../dashboard/MarketSnapshotCard';
import { SimulationPanel } from '../dashboard/SimulationPanel';
import { ElasticityCalculator } from '../dashboard/ElasticityCalculator';
import { ForecastProfitPanel } from '../dashboard/ForecastProfitPanel';

export function DashboardView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Monitor real-time market dynamics and run simulations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MarketSnapshotCard />
        <ForecastProfitPanel />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SimulationPanel />
        <ElasticityCalculator />
      </div>
    </div>
  );
}
