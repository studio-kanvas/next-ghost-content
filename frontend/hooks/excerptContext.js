import React, {createContext} from 'react';

const ExcerptContext = createContext({
	setExcerpt: (excerpt) => {
		const content = excerpt.toString();
		if(content.length >= 100){
			const condensed = [content.substring(0, 148)];
			return `${condensed}...<span class="read-more">Read More</span>`;
		}
	}
})

export default ExcerptContext;