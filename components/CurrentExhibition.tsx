// 'use client'
import React, { useState, useEffect } from 'react';
import Slider from "./CustomCarousel";

// Assuming synchronous versions of the functions are available
import { getExhibitions } from "@/sanity/sanity.query";
import { ExhibitType } from "@/types";


export default async function Job(){
    const job: ExhibitType[] = await getExhibitions();
    const singleJob = job[job.length - 1]
    const slides = singleJob.imageUrls
    return (
        <section className="">
            <div className="flex justify-center flex-col items-center">
                <div key={singleJob._id} className="">
                    <div>
                        <Slider slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
}