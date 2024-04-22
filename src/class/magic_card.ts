import { CardColor } from '../enum/card_color.js';
import { TypeLine } from '../enum/type_line.js';
import { Rarity } from '../enum/rarity.js';

/**
 * Clase that represents a Magic Card
 */
export class MagicCard {
  private id: number;
  private name: string;
  private mana_cost: number;
  private color: CardColor;
  private type_line: TypeLine;
  private rarity: Rarity;
  private rules: string;
  private market_price: number;
  private strength?: number;
  private resistance?: number;
  private loyalty?: number;
  constructor(id: number, name: string, mana_cost: number, color: CardColor, typeline: TypeLine, rarity: Rarity, rules: string, price: number, strengh? : number, resistance?: number, loyalty?: number ) {
    this.id = id;
    this.name = name;
    this.mana_cost = mana_cost;
    this.color = color;
    this.type_line = typeline;
    this.rarity = rarity;
    this.rules = rules;
    this.market_price = price;
    this.strength = strengh;
    this.resistance = resistance;
    this.loyalty = loyalty;
  }
  /**
   * Getter of the id
   * @returns id
   */
  public getId() {
    return this.id;
  }
  /**
   * Getter of the name
   * @returns nombre
   */
  public getName() {
    return this.name;
  }
  /**
   * Getter of the mana cost
   * @returns: mana cost
   */
  public getManaCost() {
    return this.mana_cost;
  }
  /**
   * Getter of the color
   * @returns: color
   */
  public getColor() {
    return this.color;
  }
  /**
   * Getter of the type line
   * @returns: type line
   */
  public getTypeLine() {
    return this.type_line;
  }
  /**
   * Getter of the rarity
   * @returns rarity
   */
  public getRarity() {
    return this.rarity;
  }
  /**
   * Getter of the rules text
   * @returns rules text
   */
  public getRulesText() {
    return this.rules;
  }
  /**
   * Getter of the market price
   * @returns market price
   */
  public getMarketPrice() {
    return this.market_price;
  }
  /**
   * Getter of the strength
   * @returns strength
   */
  public getStrength() {
    return this.strength;
  }
  /**
   * Getter of the resistance
   * @returns resistance
   */
  public getResistance() {
    return this.resistance;
  }
  /**
   * Getter of the loyalty
   * @returns loyalty
   */
  public getLoyalty() {
    return this.loyalty;
  }
  /**
   * Setter of the name
   * @param name
   */
  public setName(name: string) {
    this.name = name;
  }
  /**
   * Setter of the mana cost
   * @param mana_cost
   */
  public setManaCost(mana_cost: number) {
    this.mana_cost = mana_cost;
  }
  /**
   * Setter of the color
   * @param color
   */
  public setColor(color: CardColor) {
    this.color = color;
  }
  /**
   * Setter of the type line
   * @param type_line
   */
  public setTypeLine(type_line: TypeLine) {
    this.type_line = type_line;
  }
  /**
   * Setter of the rarity
   * @param rarity
   */
  public setRarity(rarity: Rarity) {
    this.rarity = rarity;
  }
  /**
   * Setter of the rules text
   * @param rules_text
   */
  public setRulesText(rules_text: string) {
    this.rules = rules_text;
  }
  /**
   * Setter of the market price
   * @param market_price
   */
  public setMarketPrice(market_price: number) {
    this.market_price = market_price;
  }
  /**
   * Setter of the strength
   * @param strength
   */
  public setStrength(strength: number) {
    this.strength = strength;
  }
  /**
   * Setter of the resistance
   * @param resistance
   */
  public setResistance(resistance: number) {
    this.resistance = resistance;
  }
  /**
   * Setter of the loyalty
   * @param loyalty
   */
  public setLoyalty(loyalty: number) {
    this.loyalty = loyalty;
  }
}