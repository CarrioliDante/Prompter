import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
  title: 'Pompter',
  description: 'Discover & share AI Promts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
