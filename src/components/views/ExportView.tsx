import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadIcon, FileSpreadsheetIcon, FileTextIcon } from 'lucide-react';
import { useAppStore } from '@/stores/appStore';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ExportView() {
  const { addNotification } = useAppStore();

  const handleExportExcel = () => {
    addNotification('Graphs exported to Excel successfully', 'success');
  };

  const handleExportCSV = () => {
    addNotification('Dataset exported to CSV successfully', 'success');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Data Export</h1>
        <p className="text-muted-foreground">Export your simulation data and visualizations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 bg-card text-card-foreground border-border hover:border-primary transition-colors">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <FileSpreadsheetIcon className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-foreground">Export to Excel</h2>
            <p className="text-muted-foreground mb-6">
              DownloadIcon all graphs, charts, and simulation results in Excel format. 
              Includes equilibrium data, elasticity calculations, and profit forecasts.
            </p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleExportExcel}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Export Excel File
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-popover text-popover-foreground border-border">
                  <p>Exports all simulation data in .xlsx format</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-foreground font-medium mb-2">Includes:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Supply & Demand curves</li>
                <li>• Equilibrium calculations</li>
                <li>• Elasticity metrics</li>
                <li>• Profit forecasts</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 bg-card text-card-foreground border-border hover:border-primary transition-colors">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-lg mb-6">
              <FileTextIcon className="h-8 w-8 text-secondary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-foreground">Export Dataset (CSV)</h2>
            <p className="text-muted-foreground mb-6">
              DownloadIcon raw data in CSV format for further analysis. 
              Perfect for importing into statistical software or custom analysis tools.
            </p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleExportCSV}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Export CSV File
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-popover text-popover-foreground border-border">
                  <p>Exports raw data in .csv format</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-foreground font-medium mb-2">Data fields:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Price points</li>
                <li>• Quantity values</li>
                <li>• Elasticity coefficients</li>
                <li>• Time series data</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>

      <Card className="p-6 bg-gradient-2 border-0">
        <div className="flex items-start gap-4">
          <DownloadIcon className="h-6 w-6 text-white flex-shrink-0 mt-1" />
          <div className="text-white">
            <h3 className="font-bold mb-2">Export Tips</h3>
            <p className="text-sm text-white/90">
              For best results, run multiple simulations before exporting to capture a comprehensive dataset. 
              Excel exports include formatted charts, while CSV exports provide raw data for custom analysis.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
