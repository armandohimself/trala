// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"; // Used for type checking
import prisma from "../../prisma/client"; // Used to connect to the database

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		//check that user is trying to get data and nothing else
		try {
			const teachers = await prisma.user.findMany();
			return res.status(200).json(teachers);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}
