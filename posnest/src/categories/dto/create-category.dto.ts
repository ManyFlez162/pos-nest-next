import { IsString } from 'class-validator'

export class CreateCategoryDto {
    @IsString({message: "El nombre no puede ir vacío"})
    name: string;
}
