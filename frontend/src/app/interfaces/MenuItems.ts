export interface Menu {
    id: number;
    name: string;
    displayName: string;
    route: string;
    show: boolean
}

export interface MenuItems {
    items: Menu[];
    showCart: boolean;
    showProfile: boolean;
}
