import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardView } from './components/views/DashboardView';
import { SimulatorView } from './components/views/SimulatorView';
import { LearningView } from './components/views/LearningView';
import { FlashcardsView } from './components/views/FlashcardsView';
import { ExportView } from './components/views/ExportView';
import { useAppStore } from './stores/appStore';
import { useEffect } from 'react';

function App() {
  const { currentView } = useAppStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'simulator':
        return <SimulatorView />;
      case 'learning':
        return <LearningView />;
      case 'flashcards':
        return <FlashcardsView />;
      case 'export':
        return <ExportView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <BrowserRouter>
      <MainLayout>
        {renderView()}
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
