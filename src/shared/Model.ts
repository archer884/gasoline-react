export interface Collection<T> {
    count: number;
    items: T[];
}

export interface VehicleModel {
    id: string;
    userId: string;
    name: string;
    description: string | undefined;
    image: string | undefined;
}
