import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import withData from '../lib/withData'
import Head from 'next/head'

export default withData((props) => (
  <App>
    <Head>
      <style>{`
        body {
          background: #ececec;
          margin: 0;
        }
        div,footer,header {
          margin: 0px;
        }
        li {
          background-color: beige;
        }
      `}</style>
    </Head>
    <Header pathname={props.url.pathname} />
    <Submit />
    <PostList />
  </App>
))
