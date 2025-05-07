import { Injectable } from '@nestjs/common';
import { OrtographyDto } from './dtos';
import { ortographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
  async ortographyCheck(ortographyDto: OrtographyDto) {
    return await ortographyCheckUseCase({
      prompt: ortographyDto.prompt,
    });
  }
}
