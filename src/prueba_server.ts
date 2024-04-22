import express from 'express';
import './db/mongoose.js';
import { Card } from './models/card.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/cards', (req, res) => {
  const card = new Card(req.body);
  card.save().then((note) => {
    res.send(note);
  }).catch((error) => {
    res.send(error);
  });
});

app.get('/cards', (req, res) => {
  const filter = req.query.id?{id: req.query.id.toString()}:{};
  if (req.query.id) {
    Card.find(filter).then((cards) => {
      if (cards.length !== 0) {
        res.send(cards);
      } else {
        res.status(404).send();
      }
    }).catch((error) => {
      res.send(error);
    })
  } else {
    Card.find().then((cards) => {
      res.send(cards)
    }).catch((error) => {
      res.send(error)
    })
  }
})

app.delete('/cards', (req, res) => {
  if (!req.query.id) {
    res.status(400).send({
      error: 'A id must be provided',
    });
  } else {
    Card.findOneAndDelete({id: req.query.id}).then((card) => {
      if (!card) {
        res.status(404).send();
      } else {
        res.send(card);
      }
    }).catch(() => {
      res.status(400).send();
    });
  }
});


app.patch('/cards', (req, res) => {
  if (!req.query.id) {
    res.status(400).send({
      error: 'A id must be provided',
    });
  } else {
    Card.findOneAndUpdate({id: req.query.id}, req.body, {
      new: true,
      runValidators: true,
    }).then((card) => {
      if (!card) {
        res.status(404).send();
      } else {
        res.send(card)
      }
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});