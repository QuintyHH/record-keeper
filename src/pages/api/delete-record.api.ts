import { NextApiRequestWithPayload } from '@customTypes/generics';
import { Vinyl } from '@customTypes/records';
import { HttpErrorCodes, ResponseCodes } from '@helpers/constants';
import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from 'next';

export interface GetRecordResponse {
  readonly internalCode: keyof typeof ResponseCodes;
  readonly httpCode: typeof HttpErrorCodes[number];
  readonly message: string;
  readonly values: Vinyl | null;
}

const prisma = new PrismaClient();

const deleteRecord = async (currentId: number) =>
  await prisma.vinyl.delete({
    where: {
      id: currentId,
    },
  });

export default async function handler(
  request: NextApiRequestWithPayload<string>,
  response: NextApiResponse<GetRecordResponse>
): Promise<NextApiResponse<GetRecordResponse>> {
  const id = parseInt(JSON.parse(request.body));
  return await deleteRecord(id)
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
