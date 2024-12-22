import { BravoPokerLive } from './bravo-api';

// Create singleton instance with logging enabled
export const bravoClient = new BravoPokerLive({
  debug: true, // Enable debug logging
  baseUrl: 'https://bravopokerlive.appspot.com/service'
});