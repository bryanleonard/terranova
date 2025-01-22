const getRandomSlogan = () => {
	const slogans = [
		'Your next dream home, anywhere in the world!',
		'Your dream home, anywhere in the world.',
		'Global homes, local dreams – find yours today!',
		'Connecting you to homes across the globe.',
		'Discover your perfect place, anywhere on earth',
	];
	
	return slogans[Math.floor(Math.random() * slogans.length)];
}

export default getRandomSlogan;