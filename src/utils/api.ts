import type { NextApiRequest, NextApiResponse } from 'next';

export function createHandler(key: string, service: () => Promise<any>) {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const result = await service();

    response.json({
      code: 0,
      message: '',
      data: {
        [key]: result
      }
    });
  };
}
