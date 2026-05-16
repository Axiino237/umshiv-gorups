import fs from 'fs';
import path from 'path';

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    } else {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    }
  });
}

const clientDir = path.join(process.cwd(), 'dist', 'client');
const distDir = path.join(process.cwd(), 'dist');

if (fs.existsSync(clientDir)) {
  console.log('Moving client files to dist for Vercel...');
  copyFolderSync(clientDir, distDir);
  console.log('Done!');
} else {
  console.log('No client directory found to move.');
}
