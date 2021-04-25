
/** @file config.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Andreas Olofsson
 * @date 2015
 * @module utils/config
 */

/// required to define ETH_BIGNUMBER_ROUNDING_MODE
var BigNumber = require('bignumber.js')

module.exports = {
  ETH_PADDING: 32,
  ETH_SIGNATURE_LENGTH: 4,
  ETH_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
  DEFAULT_GAS: 1111111111,

  // This is set to 1 as a temporary workaround to an issue in Burrow (see
  // https://github.com/monax/legacy-contracts.js/issues/89) and should be
  // set to 0 once that issue is resolved.
  DEFAULT_FEE: 1,

  USE_RAW_BYTES: false
}
