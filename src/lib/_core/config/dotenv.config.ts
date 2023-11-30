import dotenv from 'dotenv';

export default function(){
    dotenv.config({
        path: process.env.NODE_ENV && process.env.NODE_ENV === 'production' ? `.env` : '.env.development'
    });
}