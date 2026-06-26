export class Version {
  static max(...args: Version[]) {
    return args.reduce(
      (max, version) =>
        version.major > max.major ||
        (version.major === max.major && version.minor > max.minor) ||
        (version.major === max.major && version.minor === max.minor && version.patch > max.patch)
          ? version
          : max,
      args[0],
    );
  }

  major: number;
  minor: number;
  patch: number;

  constructor(version: string) {
    const [major, minor, patch] = version.split('.').map(Number);
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  bumpPatch(): this {
    this.patch++;
    return this;
  }

  duplicate() {
    return new Version(this.toString());
  }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }
}
