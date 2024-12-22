import { describe, it, expect, beforeEach } from "vitest";
import { BravoPokerLive } from "./bravo-api";

describe("BravoPokerLive", () => {
  let bravo: BravoPokerLive;

  const mgmCode = "NHRB";
  const mgmLat = 38.795587;
  const mgmLng = -77.02643;

  beforeEach(() => {
    bravo = new BravoPokerLive();
  });

  describe("findNearbyCasinos", () => {
    it("should fetch and parse nearby casinos successfully", async () => {
      const casinos = await bravo.findNearbyCasinos(mgmLat, mgmLng, 2);

      expect(casinos).toBeInstanceOf(Array);
      expect(casinos.length).toBeGreaterThan(0);
      expect(casinos[0].casinoID).toBe(mgmCode);
    });

    it("should throw error when searching with invalid coordinates", async () => {
      await expect(bravo.findNearbyCasinos(1000, 1000)).rejects.toThrow();
    });
  });

  describe("getCasinoDetail", () => {
    it("should fetch and parse game list successfully", async () => {
      const casino = await bravo.getCasinoDetail(mgmCode);

      expect(casino?.casinodescription).toBe("MGM National Harbor");
    });
  });

  describe("getWaitlist", () => {
    it("should fetch and parse waitlist successfully", async () => {
      const waitlist = await bravo.getWaitlist(mgmCode);

      expect(waitlist).toBeInstanceOf(Array);
    });

    it("should throw error with invalid casino ID", async () => {
      await expect(bravo.getWaitlist("INVALID", "x")).rejects.toThrow();
    });
  });
});
