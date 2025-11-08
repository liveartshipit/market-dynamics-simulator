import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useSimulatorStore } from '@/stores/simulatorStore';
import { CalculatorIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ElasticityCalculator() {
  const { 
    priceChange, 
    quantityChange, 
    elasticity, 
    elasticityType,
    setPriceChange, 
    setQuantityChange 
  } = useSimulatorStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6 bg-card text-card-foreground border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Elasticity CalculatorIcon</h2>
          <CalculatorIcon className="h-6 w-6 text-primary" />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price-change" className="text-foreground mb-2 block">
                Price Change (%)
              </Label>
              <Input
                id="price-change"
                type="number"
                value={priceChange}
                onChange={(e) => setPriceChange(parseFloat(e.target.value) || 0)}
                placeholder="Enter price change"
                className="bg-background text-foreground border-border"
              />
            </div>

            <div>
              <Label htmlFor="quantity-change" className="text-foreground mb-2 block">
                Quantity Change (%)
              </Label>
              <Input
                id="quantity-change"
                type="number"
                value={quantityChange}
                onChange={(e) => setQuantityChange(parseFloat(e.target.value) || 0)}
                placeholder="Enter quantity change"
                className="bg-background text-foreground border-border"
              />
            </div>
          </div>

          <div className="p-6 bg-gradient-1 rounded-lg text-center">
            <p className="text-sm text-white/90 mb-2">Price Elasticity of Demand</p>
            <p className="text-4xl font-bold text-white mb-3">
              {elasticity.toFixed(2)}
            </p>
            <Badge 
              variant="secondary"
              className={`${
                elasticityType === 'Elastic' ? 'bg-success text-success-foreground' :
                elasticityType === 'Inelastic' ? 'bg-warning text-warning-foreground' :
                'bg-secondary text-secondary-foreground'
              }`}
            >
              {elasticityType}
            </Badge>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground font-medium">Interpretation:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Elastic ({">"} 1): Demand is highly responsive to price changes</li>
              <li>Inelastic ({"<"} 1): Demand is less responsive to price changes</li>
              <li>Unitary (= 1): Proportional response to price changes</li>
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
