import React from 'react'
import Author from './author'
import FadeIn from '@components/animations/fade-in'
import AUTHORS_CONF from '@constants/authors-conf'
import * as S from './styled'

const AboutUsList: React.FC = () => {
  return (
    <S.AboutUsListWrapper>
      {AUTHORS_CONF.map((author) => (
        <FadeIn key={`welcome-page-author-${author.key}`}>
          <Author
            picture={author.profilePic}
            role={author.role}
            name={author.name}
            technicalName={author.key}
            aboutAuthor={author.aboutAuthor}
            minimized={author.minimized}
          />
        </FadeIn>
      ))}
    </S.AboutUsListWrapper>
  )
}

export default AboutUsList
