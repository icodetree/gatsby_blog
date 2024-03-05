import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Introduction from 'components/Main/Introduction'
import CategoryList from 'components/Main/CategoryList'
import PostList, { PostType } from 'components/Main/PostList'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[]
    }
  }
}

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
  if (!data || !data.allMarkdownRemark || !data.allMarkdownRemark.edges) {
    return <div>No data available</div>;
  }

  const { edges } = data.allMarkdownRemark;

  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};


export default IndexPage



export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark{
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`