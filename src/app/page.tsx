import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-blue4 font-mono min-h-screen p-12">
      <h1 className="text-blue1 text-5xl">Lewis Dean</h1>
      <p className="text-blue1 text-xl p-1">Software Engineer</p>
      <br className="p-4"/>

      <pre className="text-blue1">{JSON.stringify({hello: 'world'}, null, 2)}</pre>
    </main>
  )
}
