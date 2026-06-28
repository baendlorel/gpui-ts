import type { ZedGpuiFuncional } from '../types.js';
import { implementation } from '../implementations.js';

declare global {
  interface SVGElement extends ZedGpuiFuncional {
    readonly gpui: 'svg';

    // #region attributes
    fill_(fill: string): this;
    stroke_(stroke: string): this;
    // #endregion

    // #region events
    // #endregion
  }
}

$_(SVGElement, implementation, {
  // #region attributes
  fill_(fill) {
    this.setAttribute('fill', fill);
    return this;
  },
  stroke_(stroke) {
    this.setAttribute('stroke', stroke);
    return this;
  },
  // #endregion

  // #region events
  // #endregion
} as SVGElement);

export {};
