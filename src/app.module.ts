import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ErrorLoggerService } from './error-handling/error-logger.service'; // Ensure this import is correct

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ErrorLoggerService],  // Register ErrorLoggerService as a provider
})
export class AppModule {}
