import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';

@Module({
  providers: [HelloWorldResolver] // Los resolvers proporcionan instrucciones para convertir una operación GraphQL (consulta, mutación)
})                                // en datos
export class HelloWorldModule {}
