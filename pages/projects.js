import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Projects() {
    return (
        
        <div className="container">
            <Head>
                <title>Abdulrahim Mansour</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header/>
                <h1>Projects</h1>
            </main>

            <Footer />
        </div>
    )
}