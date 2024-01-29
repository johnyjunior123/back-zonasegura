import { Hash } from './Hash'

export class passwordTransformer {
    to(password: string): Promise<string> {
        return Hash.hash(password)
    }
    from(hash: string): string {
        return hash
    }
}