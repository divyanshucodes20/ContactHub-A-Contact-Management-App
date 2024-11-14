import connectDB from './db/index.js';
import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({ path: './.env' });

app.on('error', (error) => {
    console.log('Error', error);
    throw error;
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection failed!!!', error);
    });
