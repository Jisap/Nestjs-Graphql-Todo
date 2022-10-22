import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";



@InputType()                            // Índica que este dto refleja un tipo de dato perteneciente a una mutación
export class CreateTodoInput {

    @Field(() => String, {description: 'Algo que necesita ser hecho'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    description: string;
}