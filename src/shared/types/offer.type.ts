import { City } from "./city.type.js";
import { Coordinates } from "./coordinates.js";
import { User } from "./user.type.js";
import { HousingType } from "./housing.type.js";

export type Amenity = 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';

export type Offer = {
    title: string;
    description: string;
    publishedDate: Date;
    city: City['name'];
    previewImageUrl: string;
    photos: string[];
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    type: HousingType;
    rooms: number;
    guests: number;
    price: number;
    amenities: Amenity[];
    author: User;
    commentsCount: number;
    location: Coordinates;
}