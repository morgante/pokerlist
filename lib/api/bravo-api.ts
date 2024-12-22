import { z } from "zod";

export class BravoAPIError extends Error {
  constructor(
    message: string,
    public readonly endpoint: string,
    public readonly statusCode?: number,
    public readonly responseText?: string
  ) {
    super(message);
    this.name = 'BravoAPIError';
    console.error(`[Bravo API Error] ${message}`, {
      endpoint,
      statusCode,
      responseText
    });
  }
}

// Schema definitions...
export const CasinoLocationSchema = z.object({
  casinoID: z.string(),
  managementID: z.string(),
  description: z.string(),
  shortName: z.string(),
  city: z.string(),
  state: z.string(),
  lat: z.number(),
  lng: z.number(),
  distance: z.number(),
  gameCount: z.number().nullable(),
  liveGamePoker: z.boolean(),
  enableGameList: z.boolean(),
  enableWaitListInfo: z.boolean(),
});

export type CasinoLocation = z.infer<typeof CasinoLocationSchema>;

interface BravoPokerLiveOptions {
  baseUrl?: string;
  debug?: boolean;
}

export class BravoPokerLive {
  private readonly baseUrl: string;
  private readonly debug: boolean;

  constructor(options: BravoPokerLiveOptions = {}) {
    this.baseUrl = options.baseUrl || "https://bravopokerlive.appspot.com/service";
    this.debug = options.debug || false;
  }

  private log(message: string, data?: any) {
    if (this.debug) {
      console.log(`[Bravo API] ${message}`, data || '');
    }
  }

  private async fetchData<T>({
    endpoint,
    data,
    schema,
  }: {
    endpoint: string;
    data: Record<string, string>;
    schema: z.ZodType<T>;
  }): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const formData = new URLSearchParams(data);

    this.log(`Request to ${endpoint}`, data);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          Accept: "*/*",
        },
        body: formData,
      });

      const responseText = await response.text();
      this.log(`Response from ${endpoint}`, responseText);

      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        throw new BravoAPIError(
          'Invalid JSON response',
          endpoint,
          response.status,
          responseText
        );
      }

      if (!response.ok) {
        throw new BravoAPIError(
          `HTTP error ${response.status}: ${response.statusText}`,
          endpoint,
          response.status,
          responseText
        );
      }

      if (
        Array.isArray(responseData) &&
        responseData.length === 1 &&
        responseData[0].MSG
      ) {
        throw new BravoAPIError(
          responseData[0].MSG,
          endpoint,
          response.status,
          responseText
        );
      }

      try {
        return schema.parse(responseData);
      } catch (e) {
        if (e instanceof z.ZodError) {
          throw new BravoAPIError(
            `Invalid response format: ${e.message}`,
            endpoint,
            response.status,
            responseText
          );
        }
        throw e;
      }
    } catch (error) {
      if (error instanceof BravoAPIError) {
        throw error;
      }
      throw new BravoAPIError(
        `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        endpoint
      );
    }
  }

  async findNearbyCasinos(
    lat: number,
    lon: number,
    miles: number = 5,
  ): Promise<CasinoLocation[]> {
    this.log('Finding nearby casinos', { lat, lon, miles });
    
    return this.fetchData({
      endpoint: "getcasinolistbylocation",
      data: {
        lat: lat.toString(),
        lon: lon.toString(),
        mile: miles.toString(),
      },
      schema: z.array(CasinoLocationSchema),
    });
  }
}