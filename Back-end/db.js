// db.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://roudydlebtani009:Tj9slKtnfu5CFbYL@cluster0.annqa9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  if (!client.isConnected?.()) {   // for Node 4.7+ check
    await client.connect();
  }
  return client;
}

module.exports = { client, connectDB };
