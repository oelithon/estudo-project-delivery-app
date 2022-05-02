require("dotenv").config();
import app from './app';
import connectToDatabase from './connection';

const PORT = process.env.API_PORT || 3001;
connectToDatabase()
app.listen(PORT, () => console.log('ouvindo porta 3001!'));