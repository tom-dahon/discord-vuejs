
import moxios from "moxios";
import { getConnexion } from "../src/api/caller.service";

describe('getConnexion', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return a user token when getConnexion is called', async () => {
    const userData = {
      username: 'testuser',
      password: 'testpassword',
    };

    const response = {
      data: {
        token: 'test-token',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      });
    });

    const result = await getConnexion(userData);
    expect(result.data).toEqual(response);
  });
});