export default function Head() {
	// const openGraphMetaTag = "https://www.opengraph.xyz/url/https%3A%2F%2Fwww.trala.com%2F";

	https: return (
		<>
			<title>Trala | Learn Violin</title>
			<meta
				name='description'
				content='Learn violin at any age, from anywhere in the world with Trala. Trala gives you the feedback, private lessons, and community you need to learn a new instrument.'
			/>

			{/* Facebook Meta Tags */}
			<meta property='og:url' content='https://www.trala.com/' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content='Trala | Learn Violin' />
			<meta
				property='og:description'
				content='Learn violin at any age, from anywhere in the world with Trala. Trala gives you the feedback, private lessons, and community you need to learn a new instrument.'
			/>
			<meta
				property='og:image'
				content='https://firebasestorage.googleapis.com/v0/b/elite-ee4b7.appspot.com/o/joel-wyncott-tkL2_ZpOECc-unsplash.jpg?alt=media&token=8970f87c-44b9-4f39-917b-2a444a89e206'
			/>

			{/* Twitter Meta Tags  */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta property='twitter:domain' content='trala.com' />
			<meta property='twitter:url' content='https://www.trala.com/' />
			<meta name='twitter:title' content='Trala | Learn Violin' />
			<meta
				name='twitter:description'
				content='Learn violin at any age, from anywhere in the world with Trala. Trala gives you the feedback, private lessons, and community you need to learn a new instrument.'
			/>
			<meta
				name='twitter:image'
				content='https://firebasestorage.googleapis.com/v0/b/elite-ee4b7.appspot.com/o/joel-wyncott-tkL2_ZpOECc-unsplash.jpg?alt=media&token=8970f87c-44b9-4f39-917b-2a444a89e206'
			/>
			<link rel='icon' href='/assets/favicon.ico' />
		</>
	);
}
