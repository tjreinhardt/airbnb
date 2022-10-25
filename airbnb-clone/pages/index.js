import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}
          </div>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>

          <div>
            <LargeCard img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="Wishlists curated by Airbnb"
              buttonText="Get Inspired"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = [
    { "img": "https://links.papareact.com/5j2", "location": "London", "distance": "45-minute drive" },
    { "img": "https://links.papareact.com/1to", "location": "Manchester", "distance": "4.5-hour drive" },
    { "img": "https://links.papareact.com/40m", "location": "Liverpool", "distance": "4.5-hour drive" },
    { "img": "https://links.papareact.com/msp", "location": "York", "distance": "4-hour drive" },
    { "img": "https://links.papareact.com/2k3", "location": "Cardiff", "distance": "45-minute drive" },
    { "img": "https://links.papareact.com/ynx", "location": "Birkenhead", "distance": "4.5-hour drive" },
    { "img": "https://links.papareact.com/kji", "location": "Newquay", "distance": "6-hour drive" },
    { "img": "https://links.papareact.com/41m", "location": "Hove", "distance": "2-hour drive" }
  ]

  const cardsData = [
    { "img": "https://links.papareact.com/2io", "title": "Outdoor getaways" },
    { "img": "https://links.papareact.com/q7j", "title": "Unique stays" },
    { "img": "https://links.papareact.com/s03", "title": "Entire homes" },
    { "img": "https://links.papareact.com/8ix", "title": "Pet allowed" }]

  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}
