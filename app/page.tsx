
import Head from 'next/head';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className='container'>
      <Head>
        <title>Next.js CRUD Example</title>
        <meta name='description' content='Implementación básica de CRUD en Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='container-center'>
        <Aside />
        <Main />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

