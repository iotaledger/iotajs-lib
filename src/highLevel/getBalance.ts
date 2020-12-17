// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { Bip32Path } from "../crypto/bip32Path";
import { IClient } from "../models/IClient";
import { ISeed } from "../models/ISeed";
import { getUnspentAddresses, getUnspentAddressesBip32 } from "./getUnspentAddresses";

/**
 * Get the balance for a list of addresses.
 * @param client The client to send the transfer with.
 * @param seed The seed.
 * @param accountIndex The account index in the wallet.
 * @param startIndex The start index to generate from, defaults to 0.
 * @returns The balance.
 */
export async function getBalance(
    client: IClient,
    seed: ISeed,
    accountIndex: number,
    startIndex: number = 0): Promise<number> {
    const allUnspent = await getUnspentAddresses(client, seed, accountIndex, startIndex);

    return allUnspent.reduce((total, output) => total + output.balance, 0);
}

/**
 * Get the balance for a list of addresses.
 * @param client The client to send the transfer with.
 * @param seed The seed.
 * @param basePath The base path to start looking for addresses.
 * @param startIndex The start index to generate from, defaults to 0.
 * @returns The balance.
 */
export async function getBalancePath(
    client: IClient,
    seed: ISeed,
    basePath: Bip32Path,
    startIndex: number = 0): Promise<number> {
    const allUnspent = await getUnspentAddressesBip32(client, seed, basePath, startIndex);

    return allUnspent.reduce((total, output) => total + output.balance, 0);
}