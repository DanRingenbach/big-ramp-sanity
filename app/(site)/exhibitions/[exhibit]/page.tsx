// app/exhibitions/[exhibit]/page.tsx

import Image from "next/image";
import { Metadata } from "next";
import { getSingleExhibit } from "@/sanity/sanity.query";
import type { ExhibitType } from "@/types";
import ImageOverlay from "@/components/ImageOverlay";

type Props = {
    params: {
        exhibit: string;
    };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.exhibit;
    const exhibit: ExhibitType = await getSingleExhibit(slug);

    return {
        title: `${exhibit.name} | Project`,
        description: exhibit.description,
        openGraph: {
            images: exhibit.imageUrls || "add-a-fallback-project-image-here",
            title: exhibit.name,
            description: exhibit.description,
        },
    };
}

export default async function Exhibit({ params }: Props) {
    const slug = params.exhibit;
    const exhibit: ExhibitType = await getSingleExhibit(slug);

    return (
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between mb-4">
                    <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
                        {exhibit.name}
                    </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {exhibit.imageUrls.map((image, index) =>
                        <ImageOverlay  imageUrl={image} key={index} />
                    )}
                </div>
            </div>
        </main>
    );
}