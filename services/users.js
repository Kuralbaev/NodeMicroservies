const MicroMQ = require('micromq');
const logger = require('../logger')

const app = new MicroMQ({
    name: 'users',
    rabbit: {
        url: process.env.RABBIT_URL || 'amqp://guest:guest@localhost:5672',
    },
});

app.get('/users', (req, res) => {
    logger.info('Get all users');
    
    res.json([
        {
            id: 1,
            name: 'Temirlan',
        },
        {
            id: 2,
            name: 'Kuralbaev',
        }
    ]);
});

app.start().then(() => {
    logger.debug(`Start user service `)
})