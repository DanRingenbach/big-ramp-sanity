// app/newsletter/page.tsx


import Iframe from "react-iframe"

export default async function Signup() {




  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 bg-white text-black">
      <Iframe url="https://embeds.beehiiv.com/2fa6a683-5e9b-4154-9cc5-3941d959ca21" data-test-id="beehiiv-embed" width="100%" height="320" frameBorder={0} scrolling="no" className="rounded border-2 border-gray-200 m-0 bg-transparent"></Iframe>
    </main>
  );
}