import express from 'express';
import PrettyError from 'pretty-error';
import http from 'http';
import config from '../src/config';
import names from './libs/names';

const pretty = new PrettyError();
const app = express();

app.get('/users', (req, res) => {
    const regex = new RegExp(`^(${req.query.q})`, 'i');
    res.json(names.filter((name) => {
        return regex.test(name);
    }).slice(0,10));
});

if (config.apiPort) {
    const runnable = app.listen(config.apiPort, (err) => {
        if (err) {
            console.error(err);
        }
        console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
        console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
    });
}
