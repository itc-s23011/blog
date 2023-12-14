import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout ({ children }) {
  return (
    <>
      <Layout>
        <Header />
      </Layout>

      <main>{children}</main>

      <Footer />
    </>
  )
}
