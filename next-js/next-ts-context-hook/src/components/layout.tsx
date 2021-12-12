export default function Layout({ children }) {
  return (
    <>
      <p>I am a Navbar</p>
      <main>{children}</main>
      <p>I am a Footer</p>
    </>
  )
}
