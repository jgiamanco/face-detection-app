import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div className="ma4 mt0 entry">
			<div className="white f3">
				<span className="b f2">{name}, your entry count is </span>
			</div>
			
			<div className="white f2">
				{entries}
			</div>
		</div>
	);
}

export default Rank;