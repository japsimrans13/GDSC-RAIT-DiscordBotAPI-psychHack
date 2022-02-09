// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, response) => {
    response.send({ hello: 'everything still fine' });
  })

// TO DO : categorize people on the base of username
// To DO : Show response according to the category
let greetings = [
    { message: "Hello! How can I help you?" },
    { message: "Hello! How are you doing? I will be assisting you today." },
    { message: "Hi! Tell me, how can I help?" },
    { message: "Greetings! Is everything ok?" }
  ];

// GET /greeting
fastify.get('/greetings', async (request, response) => {
    // Return a random element of the array
    rand_index = Math.floor(Math.random()*greetings.length);
    const greeting = greetings[rand_index];
    response.send(greeting);
 });

 // Run the server!
const start = async () => {
    try {
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start();