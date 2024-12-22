import { z } from "zod";

// Schema for casino location response
const CasinoLocationSchema = z.object({
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

// Schema for casino details response
const CasinoDetailSchema = z.object({
  casinodescription: z.string(),
  managementID: z.string(),
});

export type CasinoDetail = z.infer<typeof CasinoDetailSchema>;

// Schema for waitlist entry
const WaitlistEntrySchema = z.object({
  gamemin: z.number(),
  playercount: z.number(),
  playername: z.string(),
  gamedesc: z.string(),
  gamename: z.string(),
  gamecode: z.string(),
  entrytime: z.string(),
  lastupdatedtm: z.string(),
  interestlist: z.number(),
  customersakey: z.string(),
  gamemax: z.number(),
  called: z.number(),
  displayorder: z.string(),
});

export type WaitlistEntry = z.infer<typeof WaitlistEntrySchema>;

export class BravoPokerLive {
  private readonly baseUrl = "https://bravopokerlive.appspot.com/service";
  /**
   * Private helper method to handle API requests
   */
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

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        Accept: "*/*",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${endpoint}: ${response.statusText}`
      );
    }

    const responseData = await response.json();

    // Check for error response format
    if (
      Array.isArray(responseData) &&
      responseData.length === 1 &&
      responseData[0].MSG
    ) {
      throw new Error(responseData[0].MSG);
    }

    const parse = schema.safeParse(responseData);
    if (!parse.success) {
      console.error(parse.error, responseData);
      throw new Error("Failed to parse response data");
    }

    return parse.data;
  }

  /**
   * Fetches nearby casinos based on latitude and longitude
   */
  async findNearbyCasinos(
    lat: number,
    lon: number,
    miles: number = 50
  ): Promise<CasinoLocation[]> {
    const data = await this.fetchData({
      endpoint: "getcasinolistbylocation",
      data: {
        lat: lat.toString(),
        lon: lon.toString(),
        mile: miles.toString(),
      },
      schema: z.array(CasinoLocationSchema),
    });

    return data;
  }

  async getCasinoDetail(casinoId: string, managementId = "x") {
    const data = await this.fetchData({
      endpoint: "getcasinodetailbyid",
      data: {
        mgmtid: managementId,
        casinoid: casinoId,
        // casino: `${casinoId}|${managementId}`,
      },
      schema: z.array(CasinoDetailSchema),
    });

    console.log(data);

    return data.length > 0 ? data[0] : null;
  }

  /**
   * Fetches the waitlist for a specific casino
   */
  async getWaitlist(casinoId: string, managementId = "x") {
    const rawData = await this.fetchData({
      endpoint: "getwaitlistbycasinoid",
      data: {
        casino: `${casinoId}|${managementId}`,
      },
      schema: z.array(WaitlistEntrySchema),
    });

    // Group entries by game code
    const gameMap = new Map<
      string,
      {
        gamecode: string;
        gamename: string;
        players: Array<WaitlistEntry>;
      }
    >();

    for (const entry of rawData) {
      if (!gameMap.has(entry.gamecode)) {
        gameMap.set(entry.gamecode, {
          gamecode: entry.gamecode,
          gamename: entry.gamename,
          players: [],
        });
      }
      gameMap.get(entry.gamecode)?.players.push(entry);
    }

    // Sort players by position in the waitlist
    for (const game of gameMap.values()) {
      game.players.sort(
        (a, b) => Number(a.displayorder) - Number(b.displayorder)
      );
    }

    return Array.from(gameMap.values());
  }
}
