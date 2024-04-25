import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
// import { getSanityImageConfig } from 'lib/sanity.client'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '../sanity/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { TypedObject } from "sanity";


const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
    return builder.image(source)
}


interface Props {
  asset: TypedObject
  alt: string
  caption?: string
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props
  const imageProps = urlFor(asset)

  console.log(imageProps)

  if (!imageProps) return null

  return (
    <figure className='flex flex-col items-center'>
      <Image
        src={imageProps.width(500).height(500).url()}
      className='object-center' alt={`${alt}`}/>
      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400 text-pretty">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}