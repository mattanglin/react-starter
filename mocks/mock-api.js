import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mockData from './mock-data';

const data = mockData();
const mockApi = express();
const api = express.Router();
const port = process.env.MOCK_PORT || 3030;
const host = process.env.MOCK_HOST || 'http://localhost';

console.log('MOCK:', host, port);

mockApi.use(morgan('tiny'));
mockApi.use(bodyParser.urlencoded({
  extended: true,
}));
mockApi.get('/', (req, res) => res.send('API running'));

// Mock API endpoints
mockApi.use('/api/v1', api);

api.get('/example-endpoint', (req, res) => {
  res.json({
    example: 'response',
  });
});

// Dev endpoints
mockApi.get('/reset-mock', (req, res) => {
  res.send(JSON.stringify(data.resetMock(), null, 2));
});

mockApi.listen(port, () => console.log(`Mock Server running at ${host}:${port}`));

export default mockApi;
