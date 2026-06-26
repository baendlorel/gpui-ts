import fs from 'node:fs';
import { execSync } from 'node:child_process';

import { getPackageInfo, syncRootVersion, PackageInfo } from './package-info.js';
import { join } from 'node:path';

export function vitebuild(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

const config = 'tsdown.config.ts';

export function buildWithInfo(info: PackageInfo) {
  console.log(`Vite Building package: ${info.name}`);

  const dist = join(info.path, 'dist');
  if (dist) {
    fs.rmSync(dist, { recursive: true, force: true });
  }

  const localBuildScript = info.json.scripts?.build;
  if (typeof localBuildScript === 'string') {
    console.log(`[${info.name}] Running local build script: ${localBuildScript}`);
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
    return;
  }

  console.log(`[${info.name}] Running global vite build...`);
  const actualConfig = join(info.path, 'vite.config.ts') ?? config;
  // TODO 改为cwd是里面，但config文件在外面
  execSync(`tsdown --config ${actualConfig} ${info.path}`, { stdio: 'inherit', env: info.env });
}
