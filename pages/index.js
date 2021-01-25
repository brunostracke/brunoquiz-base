import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'
import Head from 'next/head'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    paddin: 15px;
  }
`;


export default function Home() {
  return (
    <div>
    <Head>
      <title>Quizney</title>
      <link rel="icon" href={db.icon}></link>
    </Head>
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              Quiz da Britney
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, laboriosam provident. Animi dolores molestiae suscipit consequatur praesentium, ut molestias accusantium. Accusantium voluptas fugiat et deserunt totam ducimus ut omnis possimus.
            </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>
              Quizes do povo
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, laboriosam provident. Animi dolores molestiae suscipit consequatur praesentium, ut molestias accusantium. Accusantium voluptas fugiat et deserunt totam ducimus ut omnis possimus.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/brunostracke"/>
    </QuizBackground>
    </div>
  )
}
