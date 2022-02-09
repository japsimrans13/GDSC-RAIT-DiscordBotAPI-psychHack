// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, response) => {
    response.send({ hello: 'everything still fine' });
  })

  
let greetings = [
    { message: "Hello! How can I help you?" },
    { message: "Hello! How are you doing? I will be assisting you today." },
    { message: "Hi! Tell me, how can I help?" },
    { message: "Greetings! Is everything ok?" }
  ];

// GET /greeting
fastify.get('/greetings', async (request, response) => {
    //Returns array of greetings
    response.send(greetings);
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