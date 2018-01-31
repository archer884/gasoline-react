export class Token {
    expiration: Date;
    token: string;

    constructor(timestamp: number, token: string) {
        this.expiration = new Date(timestamp * 1000);
        this.token = token;
    }
}

export class NullToken {
    get isNull(): boolean {
        return true;
    }
}

export function isNullToken(token: Token | NullToken): token is NullToken {
    return (<NullToken> token).isNull !== undefined;
}
