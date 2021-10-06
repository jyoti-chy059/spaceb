import styled from 'styled-components'

export const PostContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 15em;
	column-gap: 3em;
	font-family: Merriweather;
`
export const PostImageContainer = styled.div`
	width: 15em;
	height: 10em;
`
export const PostImage = styled.img`
	width: 100%;
`
export const PostContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`
export const Tag = styled.span`
	color: rgba(117, 117, 117, 1);
	font-size: 13px;
`
export const Title = styled.h2`
	font-size: 20px;
	text-overflow: ellipsis;
	color: rgba(41, 41, 41, 1);
	margin-block-start: 0.5em;
	margin-block-end: 0.5em;
`
export const Desc = styled.span`
	font-size: 12px;
	width: 350px;
	padding: 0.5em 0em;
	line-height: 1.5em;
`
