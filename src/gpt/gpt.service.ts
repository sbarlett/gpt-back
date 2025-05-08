import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { OrtographyDto } from './dtos';
import { ortographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
  // Instancia de OpenAI para interactuar con la API de OpenAI
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Recibe openia para podes ingresar a la api y el prompt
  async ortographyCheck(ortographyDto: OrtographyDto) {
    return await ortographyCheckUseCase(this.openai, {
      prompt: ortographyDto.prompt,
    });
  }
}
