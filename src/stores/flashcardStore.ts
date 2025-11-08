import { create } from 'zustand';

interface Flashcard {
  id: string;
  category: string;
  term: string;
  definition: string;
  flipped: boolean;
}

interface FlashcardState {
  flashcards: Flashcard[];
  quizMode: boolean;
  currentCategory: string;
  toggleFlip: (id: string) => void;
  shuffleCards: () => void;
  toggleQuizMode: () => void;
  setCategory: (category: string) => void;
}

const initialFlashcards: Flashcard[] = [
  {
    id: '1',
    category: 'Market Types',
    term: 'Perfect Competition',
    definition: 'A market structure with many buyers and sellers, homogeneous products, and free entry/exit.',
    flipped: false,
  },
  {
    id: '2',
    category: 'Market Types',
    term: 'Monopoly',
    definition: 'A market structure with a single seller controlling the entire market supply.',
    flipped: false,
  },
  {
    id: '3',
    category: 'Market Types',
    term: 'Oligopoly',
    definition: 'A market structure dominated by a few large firms with significant market power.',
    flipped: false,
  },
  {
    id: '4',
    category: 'Pricing Strategies',
    term: 'Price Discrimination',
    definition: 'Charging different prices to different customers for the same product.',
    flipped: false,
  },
  {
    id: '5',
    category: 'Pricing Strategies',
    term: 'Penetration Pricing',
    definition: 'Setting a low initial price to gain market share quickly.',
    flipped: false,
  },
  {
    id: '6',
    category: 'Pricing Strategies',
    term: 'Premium Pricing',
    definition: 'Setting high prices to signal quality and exclusivity.',
    flipped: false,
  },
  {
    id: '7',
    category: 'Market Types',
    term: 'Monopolistic Competition',
    definition: 'Many firms selling differentiated products with some pricing power.',
    flipped: false,
  },
  {
    id: '8',
    category: 'Pricing Strategies',
    term: 'Dynamic Pricing',
    definition: 'Adjusting prices in real-time based on demand and market conditions.',
    flipped: false,
  },
];

export const useFlashcardStore = create<FlashcardState>((set) => ({
  flashcards: initialFlashcards,
  quizMode: false,
  currentCategory: 'All',
  
  toggleFlip: (id) => set((state) => ({
    flashcards: state.flashcards.map(card =>
      card.id === id ? { ...card, flipped: !card.flipped } : card
    ),
  })),
  
  shuffleCards: () => set((state) => ({
    flashcards: [...state.flashcards].sort(() => Math.random() - 0.5),
  })),
  
  toggleQuizMode: () => set((state) => ({ quizMode: !state.quizMode })),
  
  setCategory: (category) => set({ currentCategory: category }),
}));
