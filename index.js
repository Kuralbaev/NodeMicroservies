const Gateway = require('micromq/gateway');
const logger = require('./logger')

const app = new Gateway({
    microservices: ['users', 'posts'],
    rabbit: {
        url: process.env.RABBIT_URL || 'amqp://guest:guest@localhost:5672',
    },
});

app.get(['/users'], async (req, res) => {
    await res.delegate('users');
});

app.get(['/posts'], async (req, res) => {
    await res.delegate('posts');
});

app.listen(process.env.PORT || 9000).then(() => {
    logger.debug(`Start server port: ${process.env.PORT || 9000}`)
})