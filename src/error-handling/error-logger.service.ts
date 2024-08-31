import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ErrorLoggerService {
  private readonly logger = new Logger(ErrorLoggerService.name);

  logError(message: string) {
    this.logger.error(message);
  }
}
