import React from 'react'
import { PostContainer, PostImage, PostImageContainer, PostContent, Tag, Title, Desc } from './styledComponent'
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
					<Tag>{'Sept 15 . 7 min read  '}</Tag>
					<Title>{'Long Text header text example to check for '}</Title>
					<Desc>
						{'here is the short and long and medium description. here is the short and long and medium description'}
					</Desc>
					<Tag>{'React . Javascript'}</Tag>
				</PostContent>
				<PostImageContainer>
					<PostImage src={blogPostImg} />
				</PostImageContainer>
			</PostContainer>

			<PostContainer>
				<PostContent>
					<Tag>{'Sept 15 . 7 min read  '}</Tag>
					<Title>{'Long Text header text example to check for'}</Title>
					<Desc>
						{'here is the short and long and medium description. here is the short and long and medium description'}
					</Desc>
					<Tag>{'React . Javascript'}</Tag>
				</PostContent>
				<PostImageContainer>
					<PostImage src={blogPostImg} />
				</PostImageContainer>
			</PostContainer>
			<PostContainer>
				<PostContent>
					<Tag>{'Sept 15 . 7 min read  '}</Tag>
					<Title>{'Long Text header text example to check for'}</Title>
					<Desc>
						{'here is the short and long and medium description. here is the short and long and medium description'}
					</Desc>
					<Tag>{'React . Javascript'}</Tag>
				</PostContent>
				<PostImageContainer>
					<PostImage src={blogPostImg} />
				</PostImageContainer>
			</PostContainer>
		</>
	)
}
export default BlogPost
