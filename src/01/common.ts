export const computeFuel = (mass: number): number => mass > 2 ? Math.floor(mass/3) - 2 : 0;
