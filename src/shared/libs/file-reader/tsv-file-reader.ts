import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { City, Offer, HousingType, Amenity } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, previewImageUrl, photos, isPremium, isFavorite, rating, type, rooms, guests, price, amenities, userId, commentsCount, coordinates]) => ({
        title,
        description,
        publishedDate: new Date(createdDate),
        city: city as City['name'],
        previewImageUrl,
        photos: photos.split(';').map((photo) => photo.trim()),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: parseFloat(rating),
        type: type as HousingType,
        rooms: Number(rooms),
        guests: Number(guests),
        price: parseFloat(price),
        amenities: amenities.split(';').map((amenity) => amenity.trim()) as Amenity[],
        author: {
          name: userId,
          email: '',
          avatarUrl: '',
          password: '',
          userRole: 'pro'
        },
        commentsCount: Number(commentsCount),
        location: {
          latitude: Number(coordinates.split(';')[0].trim()),
          longitude: Number(coordinates.split(';')[1].trim())
        }
      }));
  }
}
