import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShuffleIcon, BrainIcon } from 'lucide-react';
import { useFlashcardStore } from '@/stores/flashcardStore';
import { motion, AnimatePresence } from 'framer-motion';

export function FlashcardsView() {
  const { flashcards, quizMode, currentCategory, toggleFlip, shuffleCards, toggleQuizMode, setCategory } = useFlashcardStore();
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const categories = ['All', 'Market Types', 'Pricing Strategies'];
  
  const filteredCards = currentCategory === 'All' 
    ? flashcards 
    : flashcards.filter(card => card.category === currentCategory);

  const handleCardClick = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Flashcards</h1>
          <p className="text-muted-foreground">Test your knowledge of economic concepts</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={shuffleCards}
            variant="outline"
            className="bg-transparent text-foreground border-border hover:bg-accent hover:text-accent-foreground"
          >
            <ShuffleIcon className="h-4 w-4 mr-2" />
            ShuffleIcon
          </Button>
          <Button
            onClick={toggleQuizMode}
            className={quizMode 
              ? 'bg-tertiary text-tertiary-foreground hover:bg-tertiary/90' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }
          >
            <BrainIcon className="h-4 w-4 mr-2" />
            {quizMode ? 'Exit Quiz' : 'Quiz Mode'}
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={currentCategory === category ? 'default' : 'outline'}
            className={`cursor-pointer ${
              currentCategory === category
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-transparent text-foreground border-border hover:bg-accent hover:text-accent-foreground'
            }`}
            onClick={() => setCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => {
            const isFlipped = flippedCards.has(card.id);
            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flip-card h-64 cursor-pointer"
                onClick={() => handleCardClick(card.id)}
              >
                <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
                  <Card className="flip-card-front absolute inset-0 p-6 bg-gradient-1 border-0 flex flex-col items-center justify-center text-center">
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
                      {card.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white">{card.term}</h3>
                    <p className="text-sm text-white/80 mt-4">Click to reveal</p>
                  </Card>

                  <Card className="flip-card-back absolute inset-0 p-6 bg-card text-card-foreground border-border flex flex-col items-center justify-center text-center">
                    <p className="text-foreground">{card.definition}</p>
                    <p className="text-sm text-muted-foreground mt-4">Click to flip back</p>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
