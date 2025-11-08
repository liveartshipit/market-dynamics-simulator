import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useSimulatorStore } from '@/stores/simulatorStore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

export function SimulationPanel() {
  const { 
    supplyLevel, 
    demandLevel, 
    equilibriumPrice, 
    equilibriumQuantity,
    setSupplyLevel, 
    setDemandLevel 
  } = useSimulatorStore();

  const generateChartData = () => {
    const data = [];
    for (let i = 0; i <= 100; i += 5) {
      data.push({
        quantity: i,
        supply: supplyLevel + (i * 0.5),
        demand: demandLevel + ((100 - i) * 0.5),
      });
    }
    return data;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 bg-card text-card-foreground border-border">
        <h2 className="text-xl font-bold mb-6 text-foreground">Equilibrium Simulation</h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="supply-slider" className="text-foreground mb-2 block">
                Supply Level: {supplyLevel}
              </Label>
              <Slider
                id="supply-slider"
                value={[supplyLevel]}
                onValueChange={(value) => setSupplyLevel(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="demand-slider" className="text-foreground mb-2 block">
                Demand Level: {demandLevel}
              </Label>
              <Slider
                id="demand-slider"
                value={[demandLevel]}
                onValueChange={(value) => setDemandLevel(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={generateChartData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 15%, 90%)" />
                <XAxis 
                  dataKey="quantity" 
                  label={{ value: 'Quantity', position: 'insideBottom', offset: -5 }}
                  stroke="hsl(210, 15%, 15%)"
                />
                <YAxis 
                  label={{ value: 'Price', angle: -90, position: 'insideLeft' }}
                  stroke="hsl(210, 15%, 15%)"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(210, 15%, 90%)',
                    color: 'hsl(210, 15%, 15%)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="supply" 
                  stroke="hsl(192, 90%, 48%)" 
                  strokeWidth={2}
                  dot={false}
                  name="Supply"
                />
                <Line 
                  type="monotone" 
                  dataKey="demand" 
                  stroke="hsl(268, 75%, 62%)" 
                  strokeWidth={2}
                  dot={false}
                  name="Demand"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Equilibrium Price</p>
              <p className="text-2xl font-bold text-foreground">${equilibriumPrice.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Equilibrium Quantity</p>
              <p className="text-2xl font-bold text-foreground">{equilibriumQuantity.toFixed(0)}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
