import React from 'react';
import styled from 'styled-components';

const P = styled.p`
	margin: 0;
	line-height: 12em;
	text-align: center;
`;
const EmptyPage = () => {
	return (
		<>
			<P>설정한 언론사가 없습니다.</P>
		</>
	);
};

export default EmptyPage;