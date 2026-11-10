#!/usr/bin/env tsx
/**
 * Seed — generuje wszystkie 100 ćwiczeń z definicji w scripts/data/.
 * Użycie: npx tsx scripts/seed.ts
 */
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { beginner } from './data/beginner';
import { intermediateA } from './data/intermediate-a';
import { intermediateB } from './data/intermediate-b';
import { advanced } from './data/advanced';
import type { ExerciseDef, Level } from './data/types';

const LEVEL_DIRS: Record<Level, string> = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
};

function levelOf(num: number): Level {
  if (num <= 25) return 'beginner';
  if (num <= 75) return 'intermediate';
  return 'advanced';
}

function generate(def: ExerciseDef): void {
  const level = levelOf(def.num);
  const dir = join(process.cwd(), 'src', LEVEL_DIRS[level], `${String(def.num).padStart(3, '0')}-${def.slug}`);
  mkdirSync(dir, { recursive: true });

  const levelLabel = level[0]!.toUpperCase() + level.slice(1);

  writeFileSync(
    join(dir, 'task.md'),
    `# ${def.num} — ${def.fn}\n\n**Poziom:** ${levelLabel}\n\n${def.task}\n`
  );

  writeFileSync(
    join(dir, 'exercise.ts'),
    `// TODO: zaimplementuj funkcję poniżej\n${def.signature}\n`
  );

  writeFileSync(join(dir, 'exercise.test.ts'), def.tests + '\n');
}

function main() {
  const srcDir = join(process.cwd(), 'src');
  rmSync(srcDir, { recursive: true, force: true });

  const all: ExerciseDef[] = [...beginner, ...intermediateA, ...intermediateB, ...advanced];

  // sortuj po numerze i waliduj
  all.sort((a, b) => a.num - b.num);
  const nums = all.map((d) => d.num);
  for (let i = 1; i <= 100; i++) {
    if (nums[i - 1] !== i) {
      console.error(`Błąd: brakuje lub duplikat numeru ${i}`);
      process.exit(1);
    }
  }

  for (const def of all) generate(def);

  console.log(`Wygenerowano ${all.length} ćwiczeń:`);
  console.log(`  beginner:     ${all.filter((d) => d.num <= 25).length} (001–025)`);
  console.log(`  intermediate: ${all.filter((d) => d.num >= 26 && d.num <= 75).length} (026–075)`);
  console.log(`  advanced:     ${all.filter((d) => d.num >= 76).length} (076–100)`);
}

main();
