import * as CryptoJs from 'crypto-js';

import { BRTK_PREFIX, KEY_STORAGE } from './constants.utils';

type returnValues = string | number | [] | object;

interface ValuesToLocalStorage {
    key: string;
    value?: returnValues;
}

export abstract class SecureStorage {
    private static KEY: string = KEY_STORAGE;

    private static set(keys: string, value: string): string {
        const key = CryptoJs.enc.Utf8.parse(keys);
        const iv = CryptoJs.enc.Utf8.parse(keys);
        const encrypted = CryptoJs.AES.encrypt(CryptoJs.enc.Utf8.parse(value), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJs.mode.CTR,
            padding: CryptoJs.pad.Pkcs7,
        });

        return encrypted.toString();
    }

    private static get(keys: string, value: string): string {
        const key = CryptoJs.enc.Utf8.parse(keys);
        const iv = CryptoJs.enc.Utf8.parse(keys);
        const decrypt = CryptoJs.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJs.mode.CTR,
            padding: CryptoJs.pad.Pkcs7,
        });

        return CryptoJs.enc.Utf8.stringify(decrypt).toString();
    }

    public static setItem(data: ValuesToLocalStorage): void {
        if (data.key && data.value) {
            data.key = this.set(this.KEY, BRTK_PREFIX + data.key);
            data.value = this.set(
                this.KEY,
                typeof data.value === 'object'
                    ? JSON.stringify(data.value)
                    : `${data.value}`,
            );

            localStorage.setItem(data.key, `${data.value}`);
        } else throw new Error('Error, la información no se pudo encriptar');
    }

    public static getItem(key: string): string | null {
        if (!key) throw new Error(`Error, debe proporcionar una key`);

        key = this.set(this.KEY, BRTK_PREFIX + key);
        const dataLocalStorage = localStorage.getItem(key);

        if (!dataLocalStorage) return null;

        return this.get(this.KEY, dataLocalStorage);
    }

    public static deleteItem(key: string): void {
        key = BRTK_PREFIX + key;
        key = this.set(this.KEY, key);
        localStorage.removeItem(key);
    }

    public static deleteAll(): void {
        localStorage.clear();
    }

    public static encrypt(_data: string): string {
        return this.set(this.KEY, _data);
    }

    public static decrypt(_data: string): string {
        return this.get(this.KEY, _data);
    }
}
