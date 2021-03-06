/** @module bundle-validator */

import { trits, trytes } from '@iota/converter'
import Kerl from '@iota/kerl'
import { validateSignatures } from '@iota/signing'
import { asTransactionTrytes } from '@iota/transaction-converter'
import { INVALID_BUNDLE } from '../../errors'
import { Validator } from '../../guards'
import { Bundle, Hash, Transaction, Trytes } from '../../types'

interface SignatureFragments {
    readonly [key: string]: ReadonlyArray<Int8Array>
}

export { Transaction, Bundle, INVALID_BUNDLE }

const HASH_TRITS_SIZE = 243
/**
 * 
 * This method takes an array of transaction trytes and checks if the signatures are valid.
 * 
 * ## Related methods
 * 
 * To get a bundle's transaction trytes from the Tangle, use the [`getBundle()`]{@link #module_core.getBundle} method.
 * 
 * @method validateBundleSignatures
 * 
 * @summary Validates the signatures in a given bundle
 *  
 * @memberof module:bundle-validator
 *
 * @param {Transaction[]} bundle - Transaction trytes
 * 
 * @example
 * ```js
 * let valid = Validator.validateBundleSignatures(bundle);
 * ```
 *
 * @return {boolean} Whether the signatures are valid
 * 
 */
export const validateBundleSignatures = (bundle: Bundle): boolean => {
    const signatures: SignatureFragments = [...bundle]
        .sort((a, b) => a.currentIndex - b.currentIndex)
        .reduce(
            (acc: SignatureFragments, { address, signatureMessageFragment, value }, i) =>
                value < 0
                    ? {
                          ...acc,
                          [address]: [trits(signatureMessageFragment)],
                      }
                    : value === 0 && acc.hasOwnProperty(address) && address === bundle[i - 1].address
                    ? {
                          ...acc,
                          [address]: acc[address].concat(trits(signatureMessageFragment)),
                      }
                    : acc,
            {}
        )

    return Object.keys(signatures).every(address =>
        validateSignatures(trits(address), signatures[address], trits(bundle[0].bundle))
    )
}

/**
 * This method takes an array of transaction trytes and validates whether they form a valid bundle by checking the following:
 * 
 * - Addresses in value transactions have a 0 trit at the end, which means they were generated using the Kerl hashing function
 * - Transactions in the bundle array are in the same order as their `currentIndex` field
 * - The total value of all transactions in the bundle sums to 0
 * - The bundle hash is valid
 *
 * ## Related methods
 * 
 * To get a bundle's transaction trytes from the Tangle, use the [`getBundle()`]{@link #module_core.getBundle} method.
 * 
 * @method isBundle
 * 
 * @summary Validates the structure and contents of a given bundle.
 *  
 * @memberof module:bundle-validator
 *
 * @param {Transaction[]} bundle - Transaction trytes
 * 
 * @example
 * ```js
 * let bundle = Validator.isBundle(bundle);
 * ```
 *
 * @return {boolean} bundle - Whether the bundle is valid
 * 
 */
export default function isBundle(bundle: Bundle) {
    let totalSum = 0
    const bundleHash = bundle[0].bundle

    const sponge = new Kerl()

    // Prepare for signature validation
    const signaturesToValidate: Array<{
        address: Hash
        signatureFragments: Trytes[]
    }> = []

    // Addresses of value txs must have last trit == 0.
    if (bundle.some(tx => tx.value !== 0 && trits(tx.address)[HASH_TRITS_SIZE - 1] !== 0)) {
        return false
    }

    // currentIndex has to be equal to the index in the array
    if (bundle.some((tx, index) => tx.currentIndex !== index)) {
        return false
    }

    // Txs must have correct lastIndex
    if (bundle.some(tx => tx.lastIndex !== bundle.length - 1)) {
        return false
    }

    bundle.forEach((bundleTx, index) => {
        totalSum += bundleTx.value

        // Get the transaction trytes
        const thisTxTrytes = asTransactionTrytes(bundleTx)

        const thisTxTrits = trits(thisTxTrytes.slice(2187, 2187 + 162))
        sponge.absorb(thisTxTrits, 0, thisTxTrits.length)

        // Check if input transaction
        if (bundleTx.value < 0) {
            const thisAddress = bundleTx.address

            const newSignatureToValidate = {
                address: thisAddress,
                signatureFragments: Array(bundleTx.signatureMessageFragment),
            }

            // Find the subsequent txs with the remaining signature fragment
            for (let i = index; i < bundle.length - 1; i++) {
                const newBundleTx = bundle[i + 1]

                // Check if new tx is part of the signature fragment
                if (newBundleTx.address === thisAddress && newBundleTx.value === 0) {
                    newSignatureToValidate.signatureFragments.push(newBundleTx.signatureMessageFragment)
                }
            }

            signaturesToValidate.push(newSignatureToValidate)
        }
    })

    // Check for total sum, if not equal 0 return error
    if (totalSum !== 0) {
        return false
    }

    // Prepare to absorb txs and get bundleHash
    const bundleFromTxs: Int8Array = new Int8Array(Kerl.HASH_LENGTH)

    // get the bundle hash from the bundle transactions
    sponge.squeeze(bundleFromTxs, 0, Kerl.HASH_LENGTH)

    // Check if bundle hash is the same as returned by tx object
    if (trytes(bundleFromTxs) !== bundleHash) {
        return false
    }

    return validateBundleSignatures(bundle)
}

export const bundleValidator: Validator<Bundle> = (bundle: Bundle) => [bundle, isBundle, INVALID_BUNDLE]
