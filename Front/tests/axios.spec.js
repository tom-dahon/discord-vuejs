import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getConnexion, getChannels, getMessages } from '../src/api/caller.service';

// Cette instance sera partagée entre tous les tests
let mock = new MockAdapter(axios);

afterEach(() => {
  // Réinitialiser toutes les simulations entre les tests
  mock.reset();
});

describe('getConnexion', () => {
  it('should return the correct data on success', async () => {
    const expectedData = { token: 'token-test' };
    mock.onPost('/auth/signin').reply(200, expectedData);

    const data = await getConnexion({ username: 'test', password: 'test' });
    expect(data.data).toEqual(expectedData);
  });

  it('should throw an error on failure', async () => {
    mock.onPost('/auth/signin').reply(500);

    await expect(getConnexion({ username: 'test', password: 'test' })).rejects.toThrow();
  });
});

describe('getChannels', () => {
  it('should return the correct data on success', async () => {
    const expectedData = [{ id: 1, name: 'channel1' }, { id: 2, name: 'channel2' }];
    mock.onGet('/channels').reply(200, expectedData);

    const data = await getChannels();
    expect(data).toEqual(expectedData);
  });

  it('should throw an error on failure', async () => {
    mock.onGet('/channels').reply(500);

    await expect(getChannels()).rejects.toThrow();
  });
});

describe('getMessages', () => {
  it('should return the correct data on success', async () => {
    const expectedData = [{ id: 1, text: 'message1' }, { id: 2, text: 'message2' }];
    mock.onGet('/channels/1/messages').reply(200, expectedData);

    const data = await getMessages(1);
    expect(data).toEqual(expectedData);
  });

  it('should throw an error on failure', async () => {
    mock.onGet('/channels/1/messages').reply(500);

    await expect(getMessages(1)).rejects.toThrow();
  });
});