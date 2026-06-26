import fs from 'node:fs';
import { execSync } from 'node:child_process';

import { getPackageInfo, PackageInfo } from './package-info.js';
import { join } from 'node:path';

export function build(who: string | undefined) {
  const group = getPackageInfo(who);
  group.forEach(buildWithInfo);
}

const config = 'tsdown.config.ts';

export function buildWithInfo(info: PackageInfo) {
  console.log(`Tsdown Building package: ${info.name}`);

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

  console.log(`[${info.name}] Running global tsdown build...`);
  const actualConfig = join(info.path, 'tsdown.config.ts') ?? config;
  execSync(`tsdown --config ${actualConfig} ${info.path}`, { cwd: info.path, stdio: 'inherit', env: info.env });
}
