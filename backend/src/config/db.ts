/* Version con mongodb basada en ChatGPT
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://isaacmd:HS7BMoMZwNNXgfyf@clusterprojects.qgx92.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjects";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function connectToDatabase() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}*/

import mongoose from 'mongoose';
import 'dotenv/config'; // Carga las variables de entorno

const uri = "mongodb+srv://isaacmd:HS7BMoMZwNNXgfyf@clusterprojects.qgx92.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjects";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
};