
import Image from "next/image";
import { PortableText, type PortableTextReactComponents } from 'next-sanity'
import styles from './Post.module.css'
import { TypedObject } from "sanity";
import { SanityImage } from "./SanityImage"

type Props = {
    coverImageURL: string;
    content: TypedObject;
};


const myPortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }) => {

            return <SanityImage {...value} />
        },
    },
}

export default async function Post({ coverImageURL, content }: Props) {

    return (
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
            <Image src={coverImageURL} width={400} height={400} alt="Overlay" className="w-full lg:h-full md:h-full sm:h-auto" />
            <div className={`max-w-3xl mx-auto ${styles.portableText}`}>
                <PortableText value={content} components={myPortableTextComponents} />
            </div>
        </main>
    );
}