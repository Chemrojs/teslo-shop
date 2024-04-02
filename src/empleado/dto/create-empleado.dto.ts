import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateEmpleadoDto {
    @IsString()
    @MinLength(2)
    nombre: string;

    @IsString()
    @MinLength(2)
    apellido: string;

    @IsNumber()
    salario: number;

}
