import Image from "next/image"
export default function footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href=""
        target="_blank"
      >
        Powered by Blockchain Lab{' '}
        // eslint-disable-next-line no-undef
        <Image src="/logo_BCLAB.png" alt="Vercel Logo" width={72} height={72} />
      </a>
    </footer>
  )
}
