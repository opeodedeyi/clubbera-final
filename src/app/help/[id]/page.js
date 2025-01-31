"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { trendingTopicsData } from "../Data";
import CTASideBanner from "@/components/utility/CTASideBanner/CTASideBanner";
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import SecHeaderBack from "@/components/header/SecHeaderBack/SecHeaderBack";
import ArticleCard from "../comp/ArticleCard/ArticleCard";
import CardColumn from '@/components/layout/CardColumn/CardColumn';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';

export default function GuideCardDetails() {
    const [ loading, setLoading ] = useState(true);
    const params = useParams();
    const id = params.id;

    return (
        <div className="centerPage">
            <SecHeaderBack />
            <CenterCont>
                blog content goes here
                {/* blog goes here */}
                <CTASideBanner
                    title={<> Didn't find what you're looking for? </>}
                    image="/dashboard/event.jpg"
                    description="We’re here to help! Let us know how we can help you better" 
                    buttonText="Contact us"
                    destination="/creategroup"
                    padding="32px 0"
                    size="normal"
                    displayImage={false}/>
                <ContainerInfo
                    title="Related articles"
                    padding='32px 0' />
                <CardColumn
                    gap='24px'
                    padding='0 0 32px'
                    width="100%"
                    maxWidth="800px">
                    {trendingTopicsData.map((card, index) => (
                        <ArticleCard
                            key={card.id}
                            id={card.id}
                            subcategory={`How-to`}
                            category={`Guest`}
                            title={card.title}
                            description={card.content}/>
                    ))}
                </CardColumn>
            </CenterCont>
        </div>
    );
}
