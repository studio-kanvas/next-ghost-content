import React, {createContext} from 'react';

const MainContext = createContext({
	timeConvert: (time) => {
		const year = time.slice(0, 4);
		const month = time.slice(5, 7);
		const day = time.slice(8, 10);
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const date = `${months[parseInt(month) - 1]} ${day}, ${year}`;
		return date;
	},
});

export default MainContext;
