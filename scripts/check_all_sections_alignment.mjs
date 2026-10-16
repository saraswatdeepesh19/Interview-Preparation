import fs from 'fs';
import path from 'path';

// Verifies that every English section is numbered consecutively without gaps.
let failed = false;

const sectionCount = fs.readdirSync('eng').filter(d => /^\d+\./.test(d)).length;

for (let secNum = 1; secNum <= sectionCount; secNum++) {
  const dir = fs.readdirSync('eng').find(d => parseInt(d) === secNum);
  if (!dir) {
    console.log(`[MISSING SECTION] ${secNum}`);
    failed = true;
    continue;
  }

  const nums = fs.readdirSync(path.join('eng', dir))
    .filter(f => f.endsWith('.md') && !f.startsWith('00.'))
    .map(f => {
      const m = f.match(/^0?(\d+)\.\s*(.+)\.md$/);
      return m ? parseInt(m[1]) : null;
    })
    .sort((a, b) => a - b);

  const gaps = nums.some((n, i) => n !== i + 1);
  console.log(`${gaps ? '[NUM MISMATCH]' : '[OK]'} Section ${secNum}: ${nums.length} questions`);
  if (gaps) failed = true;
}

if (failed) process.exit(1);
