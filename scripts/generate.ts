#!/usr/bin/env tsx
/**
 * Generator nowego ćwiczenia.
 *
 * Użycie:
 *   npm run new -- <poziom> <nazwa> [numer]
 *
 * Przykłady:
 *   npm run new -- beginner sum-two-numbers 006
 *   npm run new -- intermediate flatten-array 031
 *   npm run new -- advanced memoize 081
 */
import { mkdirSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import * as readline from 'node:readline';

const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
type Level = (typeof LEVELS)[number];

const args = process.argv.slice(2);

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (ans) => { rl.close(); resolve(ans.trim()); }));
}

async function main() {
  let level = args[0] as Level | undefined;
  let name = args[1];
  let num = args[2];

  if (!level || !LEVELS.includes(level)) {
    level = (await ask(`Poziom (${LEVELS.join('/')}): `)) as Level;
  }
  if (!LEVELS.includes(level)) {
    console.error(`Błąd: poziom musi być jednym z: ${LEVELS.join(', ')}`);
    process.exit(1);
  }

  if (!name) {
    name = await ask('Nazwa ćwiczenia (kebab-case, np. sum-two-numbers): ');
  }
  if (!/^[a-z0-9-]+$/.test(name)) {
    console.error('Błąd: nazwa musi być kebab-case (małe litery, cyfry, myślniki)');
    process.exit(1);
  }

  // automatyczny numer jeśli nie podano
  if (!num) {
    const dir = join(process.cwd(), 'src', level);
    const existing = existsSync(dir) ? readdirSync(dir) : [];
    const nums = existing
      .map((d) => parseInt(d.split('-')[0]!, 10))
      .filter((n) => !isNaN(n))
      .sort((a, b) => a - b);
    num = String((nums.at(-1) ?? 0) + 1).padStart(3, '0');
  }

  const dir = join(process.cwd(), 'src', level, `${num}-${name}`);
  if (existsSync(dir)) {
    console.error(`Błąd: katalog ${dir} już istnieje`);
    process.exit(1);
  }

  mkdirSync(dir, { recursive: true });

  const fnName = name.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());

  writeFileSync(
    join(dir, 'task.md'),
    `# ${num} — ${fnName}\n\n**Poziom:** ${level[0]!.toUpperCase() + level.slice(1)}\n\n## Treść zadania\n\nTODO: opisz zadanie.\n\n## Przykłady\n\nTODO: dodaj przykłady.\n`
  );

  writeFileSync(
    join(dir, 'exercise.ts'),
    `// TODO: zaimplementuj funkcję poniżej\nexport function ${fnName}(): void {\n  throw new Error('Not implemented');\n}\n`
  );

  writeFileSync(
    join(dir, 'exercise.test.ts'),
    `import { describe, it, expect } from 'vitest';\nimport { ${fnName} } from './exercise';\n\ndescribe('${fnName}', () => {\n  it('TODO: pierwszy test', () => {\n    // expect(${fnName}()).toBe(...);\n  });\n});\n`
  );

  console.log(`\nUtworzono ćwiczenie: src/${level}/${num}-${name}/`);
  console.log(`  task.md           — opis zadania do uzupełnienia`);
  console.log(`  exercise.ts       — tu piszesz rozwiązanie`);
  console.log(`  exercise.test.ts  — testy (możesz dopisać więcej)`);
  console.log(`\nUruchom test: npm run test:one -- src/${level}/${num}-${name}`);
}

main();
