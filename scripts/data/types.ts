export interface ExerciseDef {
  num: number;
  slug: string;
  fn: string;
  task: string;
  signature: string;
  tests: string;
}

export type Level = 'beginner' | 'intermediate' | 'advanced';

export const LEVEL_RANGES: Record<Level, [number, number]> = {
  beginner: [1, 25],
  intermediate: [26, 75],
  advanced: [76, 100],
};
