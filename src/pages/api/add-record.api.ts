import { NextApiRequestWithPayload } from '@customTypes/generics';
import { Record, Vinyl } from '@customTypes/records';
import { HttpErrorCodes, ResponseCodes } from '@helpers/constants';
import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from 'next';

export interface AddRecordResponse {
  readonly internalCode: keyof typeof ResponseCodes;
  readonly httpCode: typeof HttpErrorCodes[number];
  readonly message: string;
  readonly values: Vinyl | null;
}
const prisma = new PrismaClient();

const addNewRecord = async ({ album, artist, cover }: Record) =>
  await prisma.vinyl.create({
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
  const { album, artist, cover } = JSON.parse(request.body);
  return await addNewRecord({ album, artist, cover })
    .then((result) => {
      response.status(ResponseCodes.S1.httpCode).json({
        ...ResponseCodes.S1,
        values: result,
      });
      return response.end();
    })
    .catch((error: Error) => {
      console.error(error.message);
      response.status(ResponseCodes.T1.httpCode).json({
        ...ResponseCodes.E1,
        values: null,
      });
      return response.end();
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
