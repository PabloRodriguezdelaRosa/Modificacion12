/**
 * Enum for card color of a MagicCard
 */
export enum CardColor {WHITE, BLUE, BLACK, RED, GREEN, COLORLESS, MULTICOLOR}

export function putColor(color: string): CardColor {
  let color_ret: CardColor;
  switch (color) {
    case 'white':
      color_ret = CardColor.WHITE;
      break;
    case 'blue':
      color_ret = CardColor.BLUE;
      break;
    case 'black':
      color_ret = CardColor.BLACK;
      break;
    case 'red':
      color_ret = CardColor.RED;
      break;
    case 'green':
      color_ret = CardColor.GREEN;
      break;
    case 'multicolor':
      color_ret = CardColor.MULTICOLOR;
      break;
    default:
      color_ret = CardColor.COLORLESS;
      break;
  }
  return color_ret;
}

export function getColor(color: number): string {
  let color_ret: string;
  switch (color) {
    case 0:
      color_ret = 'white';
      break;
    case 1:
      color_ret = 'blue';
      break;
    case 2:
      color_ret = 'black';
      break;
    case 3:
      color_ret = 'red';
      break;
    case 4:
      color_ret = 'green';
      break;
    case 5:
      color_ret = 'multicolor';
      break;
    default:
      color_ret = 'colorless';
      break;
  }
  return color_ret;
}