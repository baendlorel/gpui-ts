import { implementation, type ZedGpuiFuncional } from '../types.js';

declare global {
  interface MathMLElement extends ZedGpuiFuncional {
    readonly gpui: 'mathml';

    // #region attributes
    // #endregion

    // #region events
    // #endregion
  }
}

$_(MathMLElement, implementation, {
  // #region attributes
  // #endregion
  // #region events
  // #endregion
} as MathMLElement);

export {};
