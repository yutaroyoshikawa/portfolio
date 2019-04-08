import Link from 'next/link'
import Header from '../src/components/header'
import * as Styled from '../src/styles/index'

function Index() {
  return (
    <main>
      <Styled.Entire>
        <Header />
        <section>
          <Link href="/about">
            <a>Go to About Me</a>
          </Link>
          {/* <Works /> */}
        </section>
      </Styled.Entire>
    </main>
  );
}

export default Index;
