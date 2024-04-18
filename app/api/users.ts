import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma';

const usersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        email: true,
      },
    });
    const userEmails = users.map((user) => user.email);
    return res.status(200).json(userEmails);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default usersHandler;
