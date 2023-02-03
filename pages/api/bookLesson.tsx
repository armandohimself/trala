// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"; // Used for type checking
import prisma from "../../prisma/client"; // Used to connect to the database

type bookProps = {
	name: string;
	email: string;
	password: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const bookLesson: bookProps = JSON.parse(req.body); // Parse the data from the request body

    //check that user is trying to post data and nothing else
		if (req.method === "POST") {

      // check if user left something blank
      if (!bookLesson.name.length || !bookLesson.email.length || !bookLesson.password.length) {
				return res.status(400).json({ message: "Please fill in all fields" });
			}

			const data = await prisma.user.create({
				data: {
					name: bookLesson.name,
					email: bookLesson.email,
					password: bookLesson.password,
				},
			});
			return res.status(200).json(data);
		}
	} catch (error) {
		return res.status(500).json(error);
	}
}
