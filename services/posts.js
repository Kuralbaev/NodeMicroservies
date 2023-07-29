const MicroMQ = require('micromq')
const logger = require("../logger");

const app = new MicroMQ({
    name: 'posts',
    rabbit: {
        url: process.env.RABBIT_URL || 'amqp://guest:guest@localhost:5672',
    }
})

app.get('/posts', (req, res) => {
    logger.info('Get all posts');
    
    res.json([{
        id: 1,
        title: 'Post title'
    }])
})

app.start().then(() => {
    logger.debug(`Start post service `)
})