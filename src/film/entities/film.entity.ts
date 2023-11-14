import { film } from '@prisma/client';

export class FilmEntitiy implements film {
  id: string;
  imageUrl: string;
  title: string;
  synopsis: string;
  views: number;
  rating: number;
  year: string

  createdAt: Date;
  updatedAt: Date;
}
