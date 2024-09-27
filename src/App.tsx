import './index.css'

import useTokenInfo from './lib/useTokenInfo'
import { isMobile } from './lib/utils'
import { DeviceTypeContext } from './lib/DeviceContext'

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Atomicals from './components/atomicals/Atomicals'
import Ecosystem from './components/ecosystem/Ecosystem'
import Footer from './components/footer/Footer'
import Donation from './components/Donation'

function App() {
  const [data] = useTokenInfo()
  if (!data) {
    return
  }
  const { tokenName, header, hero, features, atomicals, ecosystem, footer } =
    data

  const mobile = isMobile()

  return (
    <>
      <div className='bg-gray-950 text-atomicals-50'>
        <DeviceTypeContext.Provider value={mobile}>
          <Header tokenName={tokenName} logoImg={header.logoImg} />
          <Hero tokenName={tokenName} hero={hero} />
          <Features tokenName={tokenName} features={features} />
          <Atomicals atomicals={atomicals} />
          <Ecosystem ecosystem={ecosystem} />
          {/* Attention Please: */}
          {/* Remember to remove this component in the production project  */}
          <Donation />
          <Footer tokenName={tokenName} footer={footer} />
        </DeviceTypeContext.Provider>
      </div>
    </>
  )
}

export default App
