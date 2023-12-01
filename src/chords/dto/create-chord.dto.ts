import { IsString, MaxLength } from 'class-validator';

export class CreateChordDto {
    @IsString()
    @MaxLength(20)
    name: string;

    @IsString()
    @MaxLength(150)
    description: string;

    @IsString()
    @MaxLength(200)
    notes: string;
}
