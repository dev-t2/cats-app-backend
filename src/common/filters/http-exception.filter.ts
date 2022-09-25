import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as string | { message: string | string[] };

    if (typeof error === 'string') {
      return response.status(status).json({
        path: request.url,
        message: error,
      });
    }

    return response.status(status).json({
      path: request.url,
      message: error.message,
    });
  }
}