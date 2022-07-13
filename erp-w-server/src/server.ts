import { app } from './app';
import mongoose from 'mongoose';
import { dbConfig } from './config/db.config';

//connect to mongodb
mongoose.connect(dbConfig.DB_URL).then(() => {
  console.log('Successfully connected to MongoDB.');
});

app.listen(3000, () => console.log('running on port 3000'));
