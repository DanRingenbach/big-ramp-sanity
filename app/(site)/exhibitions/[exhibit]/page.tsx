// app/exhibitions/[exhibit]/page.tsx

import { getSingleExhibit } from "@/sanity/sanity.query";
import type { ExhibitType } from "@/types";
import ImageOverlay from "@/components/ImageOverlay";

type Props = {
    params: {
        exhibit: string;
    };
};


const Exhibit = async({ params }: Props) => {
    const slug = params.exhibit;
    const exhibit: ExhibitType = await getSingleExhibit(slug);

    return (
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">{exhibit.name}</h1>
                        <h2 className='text-lg mb-5'>{exhibit.openingDate} {'->'} {exhibit.closingDate}</h2>
                    </div>
                    <a className="border-2 rounded-lg p-2 hover:shadow-lg hover:text-purple-400 hover:duration-300" href={`${exhibit.pressRelease}?dl=`} target="_blank">Download Press Release</a>
                </div>
                <div className="flex items-start justify-between mb-4">
                    <p className="lg:leading-tight mb-4">{exhibit.description}</p>
                </div>
                <div className="flex flex-wrap items-start  mb-4">
                    {exhibit.artists.map((artist, index) => (
                        <p key={index}>{artist} &nbsp;</p>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {exhibit.imageUrls.map((image, index) =>
                        <ImageOverlay imageUrl={image} key={index} />
                    )}
                </div>
            </div>
        </main>
    );
}

export const revalidate = 60;

export default Exhibit