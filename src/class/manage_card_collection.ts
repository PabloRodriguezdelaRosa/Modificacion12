import { MagicCard } from "./magic_card.js";
import fs from "fs";

export class ManageCardCollection {
  private static ManageCardCollection_: ManageCardCollection;
  private constructor() {}
  /**
   * Method to get an instance of the manage card collection
   * @returns user_collections
   */
  public static getInstance(): ManageCardCollection {
    if (!ManageCardCollection.ManageCardCollection_) {
      ManageCardCollection.ManageCardCollection_ = new ManageCardCollection();
    }
    return ManageCardCollection.ManageCardCollection_;
  }

  /**
   * Method to add a card to the collection
   * @param user
   * @param card
   */
  public addCardToCollection(
    user: string,
    card: MagicCard,
    callback: (error: Error | undefined) => void,
  ): void {
    const filePath = `./cards/${user}/${card.getId()}.json`;

    fs.exists(filePath, (exists) => {
      if (exists) {
        callback(new Error("Card already exists"));
      } else {
        fs.stat(`./cards/${user}`, (err) => {
          if (err) {
            fs.mkdir(`./cards/${user}`, (err) => {
              if (err) {
                callback(err);
              } else {
                fs.writeFile(filePath, JSON.stringify(card, null, 2), (err) => {
                  if (err) {
                    callback(err);
                  } else {
                    callback(undefined);
                  }
                });
              }
            });
          } else {
            fs.writeFile(filePath, JSON.stringify(card, null, 2), (err) => {
              if (err) {
                callback(err);
              } else {
                callback(undefined);
              }
            });
          }
        });
      }
    });
  }

  /**
   * Method to remove a card from the collection
   * @param user
   * @param card
   */
  public removeCardFromCollection(
    user: string,
    card_id: number,
    callback: (error: Error | undefined) => void,
  ): void {
    fs.stat(`./cards/${user}`, (err) => {
      if (err) {
        callback(err);
      } else {
        fs.readdir(`./cards/${user}`, (err, files) => {
          if (err) {
            callback(err);
          } else {
            let found = false;
            let completed = 0;

            files.forEach((file) => {
              fs.readFile(
                `./cards/${user}/${file}`,
                "utf-8",
                (err, data) => {
                  if (err) {
                    callback(err);
                    return;
                  }

                  const card = JSON.parse(data);
                  if (card.id === card_id) {
                    found = true;
                    fs.unlink(
                      `./cards/${user}/${file}`,
                      (err) => {
                        if (err) {
                          callback(err);
                        } else {
                          completed++;
                          if (completed === files.length) {
                            if (found) {
                              callback(undefined);
                            } else {
                              callback(new Error("Card not found"));
                            }
                          }
                        }
                      },
                    );
                  } else {
                    completed++;
                    if (completed === files.length) {
                      if (found) {
                        callback(undefined);
                      } else {
                        callback(new Error("Card not found"));
                      }
                    }
                  }
                },
              );
            });
          }
        });
      }
    });
  }

  /**
   * Method to update a card in an user collection
   * @param user
   * @param card
   */
  public updateCardInCollection(
    user: string,
    card: MagicCard,
    callback: (error: Error | undefined) => void,
  ): void {
    fs.stat(`./cards/${user}`, (err) => {
      if (err) {
        callback(err);
      } else {
        fs.readdir(`./cards/${user}`, (err, files) => {
          if (err) {
            callback(err);
          } else {
            let found = false;
            let completed = 0;

            files.forEach((file) => {
              fs.readFile(
                `./cards/${user}/${file}`,
                "utf-8",
                (err, data) => {
                  if (err) {
                    callback(err);
                    return;
                  }

                  const card_in_collection = JSON.parse(data);
                  if (card_in_collection.id === card.getId()) {
                    found = true;
                    fs.writeFile(
                      `./cards/${user}/${file}`,
                      JSON.stringify(card, null, 2),
                      (err) => {
                        if (err) {
                          callback(err);
                        } else {
                          completed++;
                          if (completed === files.length) {
                            if (found) {
                              callback(undefined);
                            } else {
                              callback(new Error("Card not found"));
                            }
                          }
                        }
                      },
                    );
                  } else {
                    completed++;
                    if (completed === files.length) {
                      if (found) {
                        callback(undefined);
                      } else {
                        callback(new Error("Card not found"));
                      }
                    }
                  }
                },
              );
            });
          }
        });
      }
    });
  }

  /**
   * Method to list every card in the collection
   * @param user
   */

  listCollection(
    user: string,
    callback: (
      error: Error | undefined,
      collection: MagicCard[] | undefined,
    ) => void,
  ): void {
    const userDirectory = `./cards/${user}`;

    fs.stat(userDirectory, (err) => {
      if (err) {
        callback(err, undefined);
      } else {
        fs.readdir(userDirectory, (err, files) => {
          if (err) {
            callback(err, undefined);
          } else {
            const collection: MagicCard[] = [];
            let filesToRead = files.length;

            files.forEach((file) => {
              fs.readFile(`${userDirectory}/${file}`, "utf-8", (err, data) => {
                if (err) {
                  console.error("Error reading file:", err);
                  callback(err, undefined);
                  return;
                }
                const card = JSON.parse(data);
                const build_card = new MagicCard(
                  card.id,
                  card.name,
                  card.mana_cost,
                  card.color,
                  card.type_line,
                  card.rarity,
                  card.rules,
                  card.market_price,
                  card.strength,
                  card.resistance,
                  card.loyalty,
                );
                collection.push(build_card);
                filesToRead--;
                if (filesToRead === 0) {
                  callback(undefined, collection);
                }
              });
            });
          }
        });
      }
    });
  }

  /**
   * Method to show a card from the collection
   * @param user
   * @param card_id
   */
  public showCardFromCollection(
    user: string,
    card_id: number,
    callback: (success: Error | undefined, card: MagicCard | undefined) => void,
  ): void {
    fs.stat(`./cards/${user}`, (err) => {
      if (err) {
        callback(err, undefined);
      } else {
        let found = false;
        let numFilesRead = 0;
        fs.readdir(`./cards/${user}`, (err, files) => {
          if (err) {
            callback(err, undefined);
          } else {
            files.forEach((file) => {
              fs.readFile(
                `./cards/${user}/${file}`,
                "utf-8",
                (err, data) => {
                  numFilesRead++;
                  if (!found && !err) {
                    const card = JSON.parse(data);
                    if (card.id === card_id) {
                      found = true;
                      const card_build = new MagicCard(
                        card.id,
                        card.name,
                        card.mana_cost,
                        card.color,
                        card.type_line,
                        card.rarity,
                        card.rules,
                        card.market_price,
                        card.strength,
                        card.resistance,
                        card.loyalty,
                      );
                      callback(undefined, card_build);
                    }
                  }
                  if (numFilesRead === files.length && !found) {
                    console.log("Card not found");
                    callback(new Error("Card not found"), undefined);
                  }
                },
              );
            });
          }
        });
      }
    });
  }
}
