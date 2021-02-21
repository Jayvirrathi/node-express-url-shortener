import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
const urlRoutes = require('./routes/urlRoutes');
const middlewares = require('./middlewares');
const path = require('path');

dotenv.config();

const port = process.env.PORT || 4000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  bufferMaxEntries: 0,
  useFindAndModify: false,
  useCreateIndex: true
};

let app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, options);

app.enable('trust proxy');
app.use(express.static('./public'));

app.use(morgan('dev'));
app.use(helmet());

app.use('/', urlRoutes);

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`)
);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
