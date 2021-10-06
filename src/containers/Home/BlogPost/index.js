import React from 'react'
import { PostContainer, PostImage, PostImageContainer, PostContent, Tag, Title, Desc, Info } from './styledComponent'
import blogPostImg from '../../../Images/blogpost.png'

/**
 *
 * section: Image,
 */
const BlogPost = () => {
	return (
		<>
			<PostContainer>
				<PostContent>
					<Info>{'Sept 15 . 7 min read  '}</Info>
					<Title>{'Long Text header text example'}</Title>
					<Desc>
						{
							'here is the short and long and medium description. here is the short and long and medium description checking for ellipsis medium description checking for ellipsis here is the short and long and medium description. here is the short and long and medium description checking for ellipsis medium description checking for ellipsis'
						}
					</Desc>
					<p>
						<Tag>{'React'}</Tag>
						<Tag>{'Javascript'}</Tag>
						<Tag>{'Design Principles'}</Tag>
					</p>
				</PostContent>
				<PostImageContainer>
					<PostImage src={blogPostImg} />
				</PostImageContainer>
			</PostContainer>
			<PostContainer>
				<PostContent>
					<Info>{'Sept 15 . 7 min read  '}</Info>
					<Title>{'Long Text header text example'}</Title>
					<Desc>
						{
							'here is the short and long and medium description. here is the short and long and medium description checking for ellipsis medium description checking for ellipsis here is the short and long and medium description. here is the short and long and medium description checking for ellipsis medium description checking for ellipsis'
						}
					</Desc>
					<p>
						<Tag>{'React'}</Tag>
						<Tag>{'Javascript'}</Tag>
						<Tag>{'Design Principles'}</Tag>
					</p>
				</PostContent>
				<PostImageContainer>
					<PostImage src={blogPostImg} />
				</PostImageContainer>
			</PostContainer>
			<PostContainer>
				<PostContent>
					<Info>{'Sept 15 . 7 min read  '}</Info>
					<Title>{'Long Text header text example'}</Title>
					<Desc>
						{
							'here is the short and long and medium description. here is the short and long and medium description checking for ellipsis medium description checking for ellipsis here is the short and long and medium description. here is the short and long and medium description checking for ellipsis medium description checking for ellipsis'
						}
					</Desc>
					<p>
						<Tag>{'React'}</Tag>
						<Tag>{'Javascript'}</Tag>
						<Tag>{'Design Principles'}</Tag>
					</p>
				</PostContent>
				<PostImageContainer>
					<PostImage src={blogPostImg} />
				</PostImageContainer>
			</PostContainer>
		</>
	)
}
export default BlogPost
