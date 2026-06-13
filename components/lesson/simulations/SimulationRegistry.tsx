"use client";

import { PhotoelectricSim } from "./PhotoelectricSim";
import { NewtonLawsSim } from "./NewtonLawsSim";
import { GenericSim } from "./GenericSim";

interface SimulationRegistryProps {
  type: string;
  onComplete: (success: boolean) => void;
}

export function SimulationRegistry({ type, onComplete }: SimulationRegistryProps) {
  
  // Route to the correct simulation component based on the 'Type' string from markdown
  switch (type.toLowerCase()) {
    case 'newton-laws':
      return <NewtonLawsSim onComplete={onComplete} />;

    case 'photoelectric':
    case 'photoelectric-effect':
      return <PhotoelectricSim onComplete={onComplete} />;
      
    default:
      return <GenericSim type={type} onComplete={onComplete} />;
  }
}
