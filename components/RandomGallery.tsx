// 'use client'
import React, { useState, useEffect } from 'react';
import Slider from "./CustomCarousel";

// Assuming synchronous versions of the functions are available
import { getExhibitions } from "@/sanity/sanity.query";
import { ExhibitType } from "@/types";


export default async function Job(){
    const job: ExhibitType[] = await getExhibitions();
    const singleJob = job[Math.floor(Math.random() * job.length)]
    const slides = singleJob.imageUrls
    return (
        <section className="">
            <div className="h-2/4 flex justify-center">
                <h1>{singleJob.name}</h1>
                <div key={singleJob._id} className="">
                    <div>
                        <Slider slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
}