import type { NextApiRequest, NextApiResponse } from 'next';

export function createHandler(
  key: string,
  service: (...args: any[]) => Promise<any>,
  getArgs?: (request: NextApiRequest) => any[]
) {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const args = getArgs ? getArgs(request) : [];
    const result = await service(...args);

    response.json({
      code: 0,
      message: '',
      data: {
        [key]: result
      }
    });
  };
}
