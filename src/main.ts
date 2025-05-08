import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Es un pipe que se utiliza para validar automáticamente
  // los datos de entrada basándose en las clases y decoradores
  // de validación definidos (como los de la librería class-validator).
  app.useGlobalPipes(
    new ValidationPipe({
      // Elimina automáticamente las propiedades que no están definidas en la clase DTO
      whitelist: true,
      // Si se encuentran propiedades no definidas en el DTO, lanza un error en lugar de ignorarlas silenciosamente
      forbidNonWhitelisted: true,
    }),
  );
  // Permitir CORS para todas las rutas y métodos
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
