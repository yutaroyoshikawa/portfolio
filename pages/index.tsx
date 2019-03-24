import Link from 'next/link'
import Header from '../src/components/header'
import Head from '../src/components/head'

function Index() {
  return (
    <main>
      <Head
        title="top"
        description="about"
        keyword=""
        image=""
        url=""
      />
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
