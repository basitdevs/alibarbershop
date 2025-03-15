import BreadCumb from "@/components/Common/BreadCumb";
import Hero from "@/components/Common/Hero";
import Main from "@/components/News/Main";
import React from "react";

const NewsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <Hero title="Ali Barber for L’oreal at Game City Vienna" />
      <BreadCumb text="Ali Barber for L’oreal at Game City Vienna"/> 
      <Main />
    </div>
  );
};

export default NewsPage;
