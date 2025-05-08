import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { ConfigModule } from '@nestjs/config';

// Este módulo es el punto de entrada principal de la aplicación. @Modile es un decorador
@Module({
  imports: [
    // ConfigModule.forRoot(): Este módulo se utiliza para manejar
    // las variables de entorno en la aplicación.
    ConfigModule.forRoot(),
    // GptModule: Este es el módulo principal de la aplicación,
    GptModule,
  ],
})
export class AppModule {}
