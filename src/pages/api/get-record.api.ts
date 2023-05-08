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
  readonly values: readonly Vinyl[] | null;
}

const prisma = new PrismaClient();

const getRecords = async (): Promise<readonly Vinyl[]> => prisma.vinyl.findMany();

export default async function handler(
  _: NextApiRequestWithPayload<string>,
  response: NextApiResponse<GetRecordResponse>
): Promise<NextApiResponse<GetRecordResponse>> {
  return getRecords()
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
