import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
// HEADINGS;
// "Playfair Display", sans - serif;
// BODY;
// "Avenirltstd book", sans - serif;

async function getTeachers() {
	const res = await fetch(`${process.env.BASE_URL}/api/getTeachers`);

	if (!res.ok) {
		console.log("Error");
	}

	const data = await res.json();
	return data;
}

export default async function Home() {
	const teachers: { id: number; name: string; email: string }[] = await getTeachers();
	console.log(teachers);

	return (
		<main className='py-4 px-48'>
			{/* <h1 className={inter.className} >Home</h1> */}
			<Link href={"/about"}>Going to about</Link>
			{teachers.map((teacher) => {
				let imagePath = `/assets/p${teacher.id}.png`;

				console.log(imagePath);

				return (
					<div key={teacher.id}>
						<Image
							src={imagePath}
							width={300}
							height={100}
							alt='Humans'
							className='rounded-lg'
						/>
						<h1>{teacher.name}</h1>
						<h1>{teacher.email}</h1>
					</div>
				);
			})}
		</main>
	);
}
