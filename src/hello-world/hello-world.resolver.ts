import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver { // Los resolvers van a estar escuchando las diferentes entradas que este endpoint puede tener

    @Query( () => String, { description: 'Hola mundo es lo que retorna', name: 'Hello'} )
    helloWorld(): string {
        return 'Hola Mundo'
    }

    @Query( () => Float, { name: 'randomNumber'} )
    getRandomNUmber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { name: 'randomFromZeroTo', description: 'From zero to argument TO (default 6)'})
    getRandomFromZeroTo(
        @Args('to', { nullable: true, type: () => Int }) to:number = 6
    ): number {
        return Math.floor(Math.random() * to)
    }
}
