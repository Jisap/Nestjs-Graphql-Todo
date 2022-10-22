import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()        // Decorador que marca esta clase como un tipo de graphQL
export class Todo {  // Representación de como se muestra el contenido de una tabla en bd (esquema)

    @Field(() => Int )
    id: number;

    @Field(() => String )
    description: string;

    @Field(() => Boolean )
    done: boolean = false;


}