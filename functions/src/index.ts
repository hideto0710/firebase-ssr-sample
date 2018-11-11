import * as functions from "firebase-functions";
import * as express from "express";
import { Nuxt } from "nuxt";

const app = express();

const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/'
    }
};
const nuxt = new Nuxt(config);

const handleRequest = (request, response) => {
    // response.send("Hello from Firebase!");
    response.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    nuxt.renderRoute('/').then(result => {
        response.send(result.html)
    }).catch(e => {
        response.send(e)
    });
};

app.get('*', handleRequest);
export const helloWorld = functions.https.onRequest(app);
