import prisma from "./client";

async function main() {
	const userCount = await prisma.user.count();

	const user = await prisma.user.create({
		data: {
			id: userCount + 1,
			name: "Armando Arteaga",
			email: "mando@trala.com",
			password: "password",
		},
	});

	console.log(user);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
