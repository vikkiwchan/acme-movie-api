const express = require('express');
const app = express();
const { syncAndSeed, models: {Actor, Movie, Role}} = require('./db')


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <html>
    <p>Hello</p>
    <body>
    <h1>The Acme Movie API</h1>
    </body>
  </html>
  `);
});

app.get('/api/movies', async(req,res,next) => {
  try {
    const allMovies = await Movie.findAll();
    res.send(allMovies);
  } catch(err) {
    next(err)
  }
})

app.get('/api/actors', async(req,res,next) => {
  try {
    const allActors = await Actor.findAll();
    res.send(allActors);
  } catch(err) {
    next(err)
  }
})

app.get('/api/roles', async(req,res,next) => {
  try {
    const allRoles = await Role.findAll();
    res.send(allRoles);
  } catch(err) {
    next(err)
  }
})

const init = async() => {
  await syncAndSeed();
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
  })
}

init();

module.exports = app;
