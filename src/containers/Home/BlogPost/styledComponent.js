import styled from 'styled-components'
import { headerBlack, backgroundGrey, textGrey } from '../../../theme'

export const PostContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 15em;
	column-gap: 3em;
	font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif; ;
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
	color: ${textGrey};
	font-size: 13px;
	margin: 0.75em 0.75em 0.75em 0;
	background-color: ${backgroundGrey};
	border-radius: 100px;
	padding: 2px 8px;
`
export const Title = styled.p`
	font-size: 20px;
	color: ${headerBlack};
	margin-block-start: 0.5em;
	margin-block-end: 0.5em;
	width: 20em;
`
export const Desc = styled.span`
	font-size: 12px;
	width: 350px;
	margin: 0.5em 0em;
	line-height: 1.5em;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	color: ${textGrey};
`
export const Info = styled.span`
	color: ${textGrey};
	font-size: 13px;
`
