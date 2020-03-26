export class User {
    id: string;
    name: string;
    image: string;
    thumbnail?: string;
    contacts?: string[];
    info?: string;
    start_time: number;
    end_time: number;
    time: number;
    full_time: number;
    isBanned:boolean;

    constructor(user?: User) {
        this.id = user && user.id || '10';
        this.name = user && user.name || null;
        this.image = user && user.image || null;
        this.contacts = user && user.contacts || [];
        this.thumbnail = user && user.thumbnail || null;
        this.info = user && user.info || null;
        this.start_time = user && user.start_time || null;
        this.end_time = user && user.end_time || null;
        this.time = user && user.time || null;
        this.full_time = user && user.full_time || null;
        this.isBanned = user && user.isBanned || false;
    }
}
