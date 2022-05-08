export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://iknawdewae.github.io/Jsonapi/blackstones.json'
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { blackstones: data }, revalidate: 60 }
}
