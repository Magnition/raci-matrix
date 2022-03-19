import { IsNumber, IsString, IsFQDN, IsEmail } from 'class-validator';
export class TeamDto {
    @IsNumber()
    id: number;

    @IsString()
    team: string;

    @IsString()
    description: string;

    @IsFQDN()
    teamUrl: string;

    @IsEmail()
    email: string;
}
