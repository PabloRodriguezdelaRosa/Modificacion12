/**
 * Enum for card rarity
 */
export enum Rarity {COMMON, UNCOMMON, RARE, MYTHIC_RARE}

export function putRarity(rarity: string) {
  let rarity_ret: Rarity;
  switch (rarity) {
    case 'common':
      rarity_ret = Rarity.COMMON;
      break;
    case 'uncommon':
      rarity_ret = Rarity.UNCOMMON;
      break;
    case 'rare':
      rarity_ret = Rarity.RARE;
      break;
    case 'mythic_rare':
      rarity_ret = Rarity.MYTHIC_RARE;
      break;
    default:
      rarity_ret = Rarity.COMMON;
      break;
  }
  return rarity_ret;
}

export function getRarity(rarity: number): string {
  let rarity_ret: string;
  switch (rarity) {
    case 0:
      rarity_ret = 'common'
      break;
    case 1:
      rarity_ret = 'uncommon'
      break;
    case 2:
      rarity_ret = 'rare'
      break;
    case 3:
      rarity_ret = 'mythic_rare'
      break;
    default:
      rarity_ret = 'common'
      break;
  }
  return rarity_ret;
}