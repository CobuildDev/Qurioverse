import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  unlockedLessons: number[]; // globalId of unlocked lessons
  completedLessons: number[]; // globalId of completed lessons
  sparks: number;
  energy: number;
  streak: number;
  lastActiveDate: string | null;
  completeLesson: (globalId: number) => void;
  useEnergy: (amount: number) => boolean;
  addSparks: (amount: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      unlockedLessons: [101], // Start with Unit 1, Lesson 1 unlocked
      completedLessons: [],
      sparks: 0,
      energy: 100,
      streak: 1,
      lastActiveDate: null,
      
      completeLesson: (globalId) => set((state) => {
        if (state.completedLessons.includes(globalId)) return state;
        
        const newCompleted = [...state.completedLessons, globalId];
        
        // Unlock next lesson logic. Assuming 6 lessons per unit.
        const unitStr = String(globalId);
        const unit = parseInt(unitStr.slice(0, unitStr.length - 2));
        const lesson = parseInt(unitStr.slice(unitStr.length - 2));
        
        let nextGlobalId = globalId + 1;
        if (lesson >= 6) {
          nextGlobalId = (unit + 1) * 100 + 1;
        }

        const newUnlocked = state.unlockedLessons.includes(nextGlobalId) 
          ? state.unlockedLessons 
          : [...state.unlockedLessons, nextGlobalId];

        return {
          completedLessons: newCompleted,
          unlockedLessons: newUnlocked,
          sparks: state.sparks + 50 // Reward sparks for completion
        };
      }),

      useEnergy: (amount) => {
        const currentEnergy = get().energy;
        if (currentEnergy >= amount) {
          set({ energy: currentEnergy - amount });
          return true;
        }
        return false;
      },

      addSparks: (amount) => set((state) => ({ sparks: state.sparks + amount })),
    }),
    {
      name: 'qurioverse-storage',
    }
  )
);
