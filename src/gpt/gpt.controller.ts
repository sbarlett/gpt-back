import { Body, Controller, Post } from '@nestjs/common';
import { OrtographyDto } from './dtos';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  // Endpoint para verificar la ortografía
  @Post('orthography-check')
  orthographyCheck(@Body() ortographyDto: OrtographyDto) {
    // Retorna la respuesta de la verificación ortográfica
    return this.gptService.ortographyCheck(ortographyDto);
  }
}
