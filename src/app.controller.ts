import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return process.env.NODE_ENV !== 'production'
      ? 'Welcome to the API. Docs available at /api'
      : 'Welcome to the API.';
  }
}