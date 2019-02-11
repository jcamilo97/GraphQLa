/* tslint:disable */
export abstract class IQuery {
    abstract getVampires(): Vampire[] | Promise<Vampire[]>;

    abstract vampire(name: string): Vampire | Promise<Vampire>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Vampire {
    _id?: number;
    name?: string;
    age?: number;
    clan?: string;
}
