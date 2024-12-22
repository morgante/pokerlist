import { NextRequest, NextResponse } from 'next/server';

export const logger = {
  logRequest: (req: Request) => {
    const url = new URL(req.url);
    console.log(`[API Request] ${req.method} ${url.pathname}${url.search}`);
  },

  logResponse: (res: Response, startTime: number) => {
    const duration = Date.now() - startTime;
    console.log(`[API Response] Status: ${res.status} (${duration}ms)`);
  },

  logError: (error: Error) => {
    console.error('[API Error]', {
      name: error.name,
      message: error.message,
      cause: error.cause,
      stack: error.stack
    });
  }
};