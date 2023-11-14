import { OmitType } from "@nestjs/mapped-types";
import { GenreEntity } from "../entities/genre.entity";

export class CreateGenreDto extends OmitType(GenreEntity,[]){
    name: string;
}
