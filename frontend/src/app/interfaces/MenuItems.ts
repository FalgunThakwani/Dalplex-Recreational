export interface Menu {
    id: number;
    name: string;
    displayName: string;
    route: string;
    show: boolean,
    icon: string;
}

export interface MenuItems {
    items: Menu[];
    showCart: boolean;
    showProfile: boolean;
}
