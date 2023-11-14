import { genre } from "@prisma/client";

export class GenreEntity implements genre{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
