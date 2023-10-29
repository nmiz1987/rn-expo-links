

class NetworkService {
  private _headers: { [key: string]: string } = {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  private _baseUrl = 'https://netanel-server.vercel.app';

  public setToken(value: string) {
    this._headers.Authorization = 'bearer ' + value;
  }

  public async fetch(url: RequestInfo, bodyInit?: BodyInit): Promise<{ response: any; status: number; success: boolean }> {
    let body = '';
    if (bodyInit) body = JSON.stringify(bodyInit);

    const resObj = await fetch(`${this._baseUrl}/${url}`,
      {
        body,
        headers: { ...this._headers },
      }
    ).catch(error => {
      console.warn(error);
      throw error;
    });

    const status = resObj?.status || 500;
    const response = await resObj.json();

    if (!resObj || String(status).charAt(0) !== '2') {
      return {
        response,
        status,
        success: false,
      };
    }

    return {
      response,
      status,
      success: true,
    };
  }
}
export default new NetworkService();
