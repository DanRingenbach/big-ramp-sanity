import Image from "next/image";
import { getExhibitions } from "@/sanity/sanity.query";
import type { ExhibitType } from "@/types";
import Link from "next/link";

export default async function Exhibit() {
    const job: ExhibitType[] = await getExhibitions();

    return (
        <section className="mt-32">
            <div className="mb-16">
                <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
            </div>
           

            <div className="">
                {job.map((data) => (
                    <Link key={data._id} href={`/jobs/${data.slug}`}>
                    <div
                        className=""
                    >
                       {data.imageUrls.map((image, index) =>
                            <Image width={400} height={400} src={image} alt="gay" key={index} />
                        )}
                        
                        <div className="">
                            <h3 className="text-xl font-bold">{data.name}</h3>
                            <p>{data.name}</p>
                            <small className="">

                            </small>
                            <p className="">{data.description}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    </Link>
                    ))}
            </div>
        </section>
    );

}