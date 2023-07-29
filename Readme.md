## Setup

Start RabbitMQ:

```bash
docker-compose up -d
```


Start Node:

```bash
npm install

# Start Gateway 
node index.js

# Start all services 
node  .\services\users.js
node  .\services\posts.js
```

Open `http://localhost:9000/users`