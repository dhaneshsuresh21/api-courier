
const express = require('express');
const cors = require('cors');
const redis = require('redis');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express());
app.use(cors());

// redis://default:Redis@123@redis-11077.c9.us-east-1-4.ec2.cloud.redislabs.com:11077

const PORT = process.env.PORT || 3001;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_CLIENT_PASSWORD = process.env.REDIS_CLIENT_PASSWORD;

const client = redis.createClient({
  password: REDIS_CLIENT_PASSWORD,
  socket: {
    host: 'redis-11077.c9.us-east-1-4.ec2.cloud.redislabs.com',
    port: REDIS_PORT
  }
});

client
  .connect()
  .then(async (res) => {
    console.log('redis - connected');
  })
  .catch((err) => {
    console.log('err happened' + err);
  });


async function getValueFromRedis(key) {

  const data = await client.get(key);
  return JSON.parse(data);

}

async function setValueInRedis(key, value) {

  const data = JSON.stringify(value);
  await client.set(key, data);

}

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (error) => {
  console.error('Error connecting to Redis:', error);
});


app.get('/', (req, res) => {
  res.json({ page: "root" })
})

app.get('/get', async (req, res) => {
  const { method, apiUrl } = req.query; // Get the dynamic method and URL parameters from the request query
  console.log(apiUrl);
  try {
    const response = await axios({
      method, // Use the dynamic method
      url: apiUrl, // Use the dynamic URL
      data: req.body, // Pass the request body as the payload (if applicable)
    });

    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.sendStatus(500);
  }
})

app.get('/request', async (req, res) => {

  const { url, method, queryParams, headers, jsonData } = req.query;


  try {

    if (method === "get") {
      const data = await getValueFromRedis(url);

      if (data) {
        console.log("cache-used");
        return res.json(data);
      }
    }

    const response = await axios({
      url,
      method,
      params: queryParams,
      headers,
      data: jsonData,
    });
    if (method === "get") {
      await setValueInRedis(url, response.data);
      console.log("cache-set")
    }

    return res.json(response.data);  // Send the response from the external API back to the frontend
  } catch (error) {
    res.status(500).json({ error: error });  // Handle any errors that occurred during the request
  }
  // finally{
  //   await client.disconnect();
  // }
});

process.on('SIGINT', () => {
  client.disconnect(() => {
    console.log('Redis client disconnected');

  });

  // client.quit(() => {
  //   console.log('Redis client closed');
  //   process.exit();
  // });
});

app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
})


