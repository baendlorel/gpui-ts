import { readFileSync, writeFileSync } from 'node:fs';
import { Version } from './version.js';
import { join } from 'node:path';

export interface PackageInfo {
  /**
   * Absolute path to the package directory, e.g. ...path-to-kt.js/packages/core
   */
  path: string;
  version: Version;
  json: any;
  name: string;
  nameVer: string;
  env: {
    /**
     * Used to tell the child process which package to build. The vite config will read this variable to determine the entry file and output file name.
     */
    LIB_DIR: string;
    TZ?: string | undefined;
  };
}

const publishGroupMap = new Map<string | undefined, string[]>([[undefined, ['main', 'treeshake']]]);

const getAbsolutePath = (who: string) => join(import.meta.dirname, '..', 'packages', who);
const getGroup = (who: string): string[] => {
  const raw = publishGroupMap.get(who);
  return raw ? raw.map(getAbsolutePath) : [getAbsolutePath(who)];
};

const loadJson = (p: string) => JSON.parse(readFileSync(p, 'utf-8'));

export function getPackageInfo(who: string = 'main'): PackageInfo[] {
  return getGroup(who)
    .map((absolutePackagePath) => {
      const data = loadJson(join(absolutePackagePath, 'package.json'));

      return {
        path: absolutePackagePath,
        version: new Version(data.version),
        json: data,
        name: data.name as string,
        nameVer: `${data.name}@${data.version}`,
        env: { ...process.env, LIB_DIR: absolutePackagePath },
      };
    })
    .filter((info): info is PackageInfo => info !== null);
}
