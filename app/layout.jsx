import '@styles/globals.css'
export const metadata = {
  title: 'Pompter',
  description: 'Discover & share AI Promts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
