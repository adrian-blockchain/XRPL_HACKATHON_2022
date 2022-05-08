import { useRouter } from 'next/router'

export default function Nft() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>NFT n°{id}</h1>
      <h2>{Nft.name}</h2>
    </div>
  )
}

export async function getServerSideProps({ params }: any) {
  const req = await fetch(`${process.env.API_URL}/nfts/${params.id}`)
  const data = await req.json()

  return {
    props: { Nft: data },
  }
}
