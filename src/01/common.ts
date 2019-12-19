export const computeFuel = (mass: number): number => mass >= 9 ? Math.floor(mass/3) - 2 : 0;
