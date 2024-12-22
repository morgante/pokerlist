import { NextResponse } from "next/server";
import { bravoClient } from "@/lib/api/bravo-client";
import { BravoAPIError } from "@/lib/api/bravo-api";
import { logger } from "@/lib/utils/logger";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const startTime = Date.now();
  logger.logRequest(request);

  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    const response = NextResponse.json(
      { error: "Missing latitude or longitude" },
      { status: 400 }
    );
    logger.logResponse(response, startTime);
    return response;
  }

  try {
    const casinos = await bravoClient.findNearbyCasinos(
      parseFloat(lat),
      parseFloat(lon)
    );
    const response = NextResponse.json(casinos);
    logger.logResponse(response, startTime);
    return response;
  } catch (error) {
    logger.logError(error as Error);

    console.error("WE are erroring here...");

    if (error instanceof BravoAPIError) {
      const response = NextResponse.json(
        {
          error: error.message,
          endpoint: error.endpoint,
          statusCode: error.statusCode,
          details: error.responseText,
        },
        { status: error.statusCode || 500 }
      );
      logger.logResponse(response, startTime);
      return response;
    }

    const response = NextResponse.json(
      { error: "Failed to fetch casinos" },
      { status: 500 }
    );
    logger.logResponse(response, startTime);
    return response;
  }
}
