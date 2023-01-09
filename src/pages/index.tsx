import Head from 'next/head';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'] });

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Next Community Platform</title>
        <meta name="description" content="Next community platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <h1 className="text-3xl font-bold">Next Community Platform</h1>
      </main>
    </>
  );
};

export default Home;
