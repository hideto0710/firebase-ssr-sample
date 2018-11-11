import * as functions from "firebase-functions";
import { Nuxt } from "nuxt";

const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/'
    }
};
const nuxt = new Nuxt(config);

export const helloWorld = functions.https.onRequest((request, response) => {
    response.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    nuxt.renderRoute('/').then(result => {
        response.send(result.html)
    }).catch(e => {
        response.send(e)
    });
});
