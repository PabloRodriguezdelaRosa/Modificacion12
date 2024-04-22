import { MagicCard } from "../class/magic_card.js";

/**
 * Interface for a user
 */
export interface User {
  user_name: string;
  card: MagicCard;
}