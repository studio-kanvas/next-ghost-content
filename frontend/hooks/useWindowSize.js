import { useState, useEffect } from 'react';

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
}
