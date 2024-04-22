import { MagicCard } from "../class/magic_card.js";
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
public addCardToCollectionPromises(
  user: string,
  card: MagicCard,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const filePath = `./cards/${user}/${card.getId()}.json`;
    fs.promises.access(filePath).then(() => {
        reject("Card already exists");
    }).catch(() => {
      fs.promises.stat(`./cards/${user}`).catch(() => 
        fs.promises.mkdir(`./cards/${user}`)).then(() => 
          fs.promises.writeFile(filePath, JSON.stringify(card, null, 2))).then(() => 
            resolve("Card added to collection"))
      });
  });
}
        

  /**
   * Method to remove a card from the collection
   * @param user
   * @param card
   */
  public removeCardFromCollectionPromises(
    user: string,
    card_id: number,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.promises.stat(`./cards/${user}`).then(() => 
        fs.promises.readdir(`./cards/${user}`)).then((files) => {
          let found = false;
          let completed = 0;
          files.forEach((file) => {
            fs.promises.readFile(`./cards/${user}/${file}`, "utf-8").then((data) => {
              const card = JSON.parse(data);
              if (card.id === card_id) {
                found = true;
                fs.promises.unlink(`./cards/${user}/${file}`).then(() => {
                  resolve('Card removed')
                })
              }
            }).then(() => {
              completed++;
              if (completed === files.length) {
                if (found) {
                  resolve('Card removed');
                } else {
                  reject('Card not found');
                }
              }
            })
          });
        })
    });
  }
}

ManageCardCollection.getInstance().addCardToCollectionPromises("test_user", new MagicCard(1, "name", 4, 0, 0, 0, "rules", 1)).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

ManageCardCollection.getInstance().removeCardFromCollectionPromises("test_user", 1).then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});