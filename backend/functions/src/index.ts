import * as functions from "firebase-functions";
import * as express from 'express';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

const exp = express();

exp.get('/api', (request, response) => {
    response.status(200).send('Hello World');
});

export const app = functions.https.onRequest(exp);
