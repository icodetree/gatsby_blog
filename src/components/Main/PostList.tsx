import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'

const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: ['Web', 'Frontend', 'Testing'],
    summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
    thumbnail:
        'https://images.unsplash.com/photo-1704642220407-392955316c7a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.google.co.kr/',
}
const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`


const PostList: FunctionComponent = function () {
    return (
      <PostListWrapper>
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
      </PostListWrapper>
    )
  }

export default PostList
