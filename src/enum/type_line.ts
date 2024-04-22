/**
 * Enum for the type line of a MagicCard
 */
export enum TypeLine {CREATURE, ARTIFACT, ENCHANTMENT, INSTANT, SORCERY, PLANESWALKER, LAND}

export function putType(type: string): TypeLine {
  let type_ret: TypeLine;
  switch (type) {
    case 'creature':
      type_ret = TypeLine.CREATURE;
      break;
    case 'artifact':
      type_ret = TypeLine.ARTIFACT;
      break;
    case 'enchantment':
      type_ret = TypeLine.ENCHANTMENT;
      break;
    case 'instant':
      type_ret = TypeLine.INSTANT;
      break;
    case 'sorcery':
      type_ret = TypeLine.SORCERY;
      break;
    case 'planeswalker':
      type_ret = TypeLine.PLANESWALKER;
      break;
    case 'land':
      type_ret = TypeLine.LAND;
      break;
    default:
      type_ret = TypeLine.CREATURE;
      break;
  }
  return type_ret;
}

export function getType(type: number): string {
  let type_ret: string;
  switch (type) {
    case 0:
      type_ret = 'creature';
      break;
    case 1:
      type_ret = 'artifact';
      break;
    case 2:
      type_ret = 'enchantment';
      break;
    case 3:
      type_ret = 'instant';
      break;
    case 4:
      type_ret = 'sorcery';
      break;
    case 5:
      type_ret = 'planeswalker';
      break;
    case 6:
      type_ret = 'land';
      break;
    default:
      type_ret = 'creature';
      break;
  }
  return type_ret;
}