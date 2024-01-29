import { hash, genSalt, compare } from 'bcrypt'

export class Hash {
    static async hash(password: string) {
        const salt = await genSalt()
        const passwordCrypto = await hash(password, salt)
        return passwordCrypto
    }
    static async compare(password: string, hashPassword: string) { 
        return compare(password, hashPassword)
    }
}