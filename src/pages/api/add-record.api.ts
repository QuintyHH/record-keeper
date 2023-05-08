import { PrismaClient } from '@prisma/client';
import type { NextApiResponse } from 'next';

import type { NextApiRequestWithPayload } from '@customTypes/generics';
import type { Record, Vinyl } from '@customTypes/records';
import type { HttpErrorCodes } from '@helpers/constants';
import { ResponseCodes } from '@helpers/constants';

export interface AddRecordResponse {
  readonly internalCode: keyof typeof ResponseCodes;
  readonly httpCode: typeof HttpErrorCodes[number];
  readonly message: string;
  readonly values: Vinyl | null;
}
const prisma = new PrismaClient();

const addNewRecord = async ({ album, artist, cover }: Record): Promise<Vinyl> =>
  prisma.vinyl.create({
    data: {
      albumCoverURL: cover,
      albumName: album,
      artistName: artist,
    },
  });

export default async function handler(
  request: NextApiRequestWithPayload<string>,
  response: NextApiResponse<AddRecordResponse>
): Promise<NextApiResponse<AddRecordResponse>> {
  const { album, artist, cover } = JSON.parse(request.body) as Record;
  return addNewRecord({ album, artist, cover })
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
