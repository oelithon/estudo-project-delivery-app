import express from 'express';
import routers from './routes'

const app = express();

app.use(express.json());

routers.mas((route) =>app.use('/', route));


export default app; 