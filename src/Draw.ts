export interface User {
    name: string;
    email: string;
}
export interface DrawInterface {
    createOn: Date;
    user: User;
    lastIndex: number;
}
export default class Draw {
    createOn: Date = new Date();
    user: User;
    lastIndex: number = -1;
    constructor(user: User) {
        this.user = user;
    }
    getLastIndex(): number {
        return this.lastIndex
    }
    setLastIndex(lastIndex: number): void {
        this.lastIndex = lastIndex;
    }
}