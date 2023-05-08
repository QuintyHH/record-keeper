import { PrismaClient } from '@prisma/client';
import type { NextApiResponse } from 'next';

import type { NextApiRequestWithPayload } from '@customTypes/generics';
import type { Vinyl } from '@customTypes/records';
import type { HttpErrorCodes } from '@helpers/constants';
import { ResponseCodes } from '@helpers/constants';

export interface GetRecordResponse {
  readonly internalCode: keyof typeof ResponseCodes;
  readonly httpCode: typeof HttpErrorCodes[number];
  readonly message: string;
  readonly values: Vinyl | null;
}

const prisma = new PrismaClient();

const deleteRecord = async (currentId: number): Promise<Vinyl> =>
  prisma.vinyl.delete({
    where: {
      id: currentId,
    },
  });

export default async function handler(
  request: NextApiRequestWithPayload<string>,
  response: NextApiResponse<GetRecordResponse>
): Promise<NextApiResponse<GetRecordResponse>> {
  const id = Number.parseInt(JSON.parse(request.body), 10);
  return deleteRecord(id)
    .then(async (result) => {
      response.status(ResponseCodes.S1.httpCode).json({
        ...ResponseCodes.S1,
        values: result,
      });
      await prisma.$disconnect();
      return response.end();
    })
    .catch(async (error: Error) => {
      console.error(error.message);
      response.status(ResponseCodes.T1.httpCode).json({
        ...ResponseCodes.E1,
        values: null,
      });
      await prisma.$disconnect();
      return response.end();
    });
}
