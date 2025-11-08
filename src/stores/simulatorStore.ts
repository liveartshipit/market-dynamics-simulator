import { create } from 'zustand';

interface SimulatorState {
  supplyLevel: number;
  demandLevel: number;
  priceChange: number;
  quantityChange: number;
  equilibriumPrice: number;
  equilibriumQuantity: number;
  elasticity: number;
  elasticityType: string;
  setSupplyLevel: (level: number) => void;
  setDemandLevel: (level: number) => void;
  setPriceChange: (change: number) => void;
  setQuantityChange: (change: number) => void;
  calculateEquilibrium: () => void;
  calculateElasticity: () => void;
}

export const useSimulatorStore = create<SimulatorState>((set, get) => ({
  supplyLevel: 50,
  demandLevel: 50,
  priceChange: 0,
  quantityChange: 0,
  equilibriumPrice: 50,
  equilibriumQuantity: 50,
  elasticity: 0,
  elasticityType: 'Unitary',
  
  setSupplyLevel: (level) => {
    set({ supplyLevel: level });
    get().calculateEquilibrium();
  },
  
  setDemandLevel: (level) => {
    set({ demandLevel: level });
    get().calculateEquilibrium();
  },
  
  setPriceChange: (change) => {
    set({ priceChange: change });
    get().calculateElasticity();
  },
  
  setQuantityChange: (change) => {
    set({ quantityChange: change });
    get().calculateElasticity();
  },
  
  calculateEquilibrium: () => {
    const { supplyLevel, demandLevel } = get();
    const price = (supplyLevel + demandLevel) / 2;
    const quantity = 100 - Math.abs(supplyLevel - demandLevel);
    set({ 
      equilibriumPrice: price,
      equilibriumQuantity: quantity 
    });
  },
  
  calculateElasticity: () => {
    const { priceChange, quantityChange } = get();
    if (priceChange === 0) {
      set({ elasticity: 0, elasticityType: 'Undefined' });
      return;
    }
    const elasticityValue = Math.abs(quantityChange / priceChange);
    let type = 'Unitary';
    if (elasticityValue > 1) type = 'Elastic';
    else if (elasticityValue < 1) type = 'Inelastic';
    set({ elasticity: elasticityValue, elasticityType: type });
  },
}));
