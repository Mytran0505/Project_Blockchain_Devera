import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="min-w-full text-gray-800 py-14 px-4 md:px-0">
        <div className="flex items-center container mx-auto max-w-5xl justify-between h-full">
          {/* Logo */}
          {/* <Link href="#"> */}
            <a href="#" className="font-coiny text-xl md:text-3xl font-bold">
              <span className="bg-gradient-to-br from-brand-blue to-brand-purple pr-2 bg-clip-text text-transparent ">
                Bored
              </span>
              Ape
            </a>
          {/* </Link> */} 
        </div>
      </header>

      <div className="h-full w-full container max-w-5xl mx-auto flex flex-col items-center pt-4">
        <div className="flex flex-col items-center max-w-4xl w-full">
          {/* <Link href="/mint" passHref> */}
            <a href="/mint" passHref className="mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-3xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white">
              Go to minting page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          {/* </Link> */}

          <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 items-center mt-20 w-full">
            {/* BoredApe Image */}
            <img
              src="/images/9.png"
              className="w-64 h-64 rounded-md object-cover"
            />

            <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-gray-800 px-4 md:px-0 py-10 mt-14">
              <h2 className="font-bold text-2xl md:text-4xl uppercase">
                About BoredApes
              </h2>

              <p className="mt-6 text-lg">
                {`BoredApes are a collection of 5,555 burning hot NFTs living in
                the core of the blockchain. Each individual BoredApes is
                carefully curated from over 150 traits, along with some
                incredibly rare 1/1s that have traits that can't be found from
                any other BoredApes. Our vision is to create an amazing project
                that will shed light, joy, love, and creativity! Burn on,
                BoredApes!`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
