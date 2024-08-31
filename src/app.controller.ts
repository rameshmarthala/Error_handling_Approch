import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { CustomException } from './custom-exception/custom.exception';
import { ErrorLoggerService } from './error-handling/error-logger.service';
import { HttpErrorFilter } from './error-handling/http-error.filter';

@Controller()
export class AppController {
  constructor(private readonly errorLoggerService: ErrorLoggerService) {}

  // Root Route to Handle Homepage Requests
  @Get()
  getHomepage() {
    return 'Welcome to the Error Handling Demo Homepage!';
  }

  // Route to handle HTTP Exceptions
  @Get('page')
  handlePageRequest() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  // Route to handle Custom Exceptions
  @Get('page/custom-error')
  handleCustomError() {
    throw new CustomException();
  }

  // Route to handle Exceptions with a Filter
  @Get('page/filtered-error')
  @UseFilters(HttpErrorFilter)
  handleFilteredError() {
    throw new HttpException('Filtered Error', HttpStatus.BAD_REQUEST);
  }

  // Route to log errors and throw an exception
  @Get('page/log-error')
  handleLogError() {
    this.errorLoggerService.logError('This is a logged error');
    throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
