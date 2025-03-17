import Hero from "@/components/Common/Hero";
import ContentAndVideo from "@/components/Gallery/ContentAndVideo";
import React from "react";

const galleryData =  [
  {
    title: "Ali Barber for L'oreal at Game City Vienna",
    desc: `Ali Barber Shop was the star barber at the L'oreal in Game City Rathaus Vienna 2023.
    
    <br /> <br />
    
    Amidst the digital worlds and futuristic experiences, Ali Barber brought a breath of fresh air—or rather, fresh looks. His offer of professional and stylish hair and beard care to Game City Vienna visitors became a hit of the trade fair. Ali and his team proved that gaming and style can go hand in hand.`,
    video: "https://alibarbershop.at/files/Barberclub-Ali-Barber-for-Loreal-at-Game-City-Vienna-Rathaus-2023.mp4",
  },
  {
    title: `ALI BARBER SHOP MEETS VIENNA HIGH SOCIETY AT OH <br class="md:block hidden" />
            <b>, WHAT A NIGHT! CHARITY CLUBBING</b>`,
    desc: `Ali Barber Shop was at the Oh, what a night! charity clubbing event at Kursalon Hübner 1010 Vienna on August 24, 2023.
    
    <br /> <br />
    
    This evening, Vienna's high society and scene were present, who were given a stylish makeover by Ali Barber, which perfectly matched their sexy and elegant outfits and made their presence the shining center of the event.
    
    <br /><br />
    
    The atmosphere at the Kursalon Hübner was electric as illustrious guests from high society and the Viennese scene prepared for the big event in the skilled hands of Ali Barber.`,
    video: "https://alibarbershop.at/files/VIENNA_ALI_BARBER_Show-_High_Society_@_Oh_what_a_night_Kursalon_2023.mp4",
  },
  {
    title: `ALI BARBER SHOP IN <br class="md:block hidden" />
            <b>BREITLING BOUTIQUE VIENNA</b>`,
    desc: `“Breitling meets Ali Barber” was a Father’s Day event that took place on June 10th this year.
    
    <br /><br />
    
    On this special day, we dedicated ourselves entirely to the men of creation and celebrated the spirit of Father's Day tradition in the Breitling Boutique at Kohlmarkt 3, 1010 Vienna.
    
    <br /><br />
    
    Ali Barber, the renowned men’s hairdresser/barber, offered a “fresh up your style” with his barber chair on site while the latest Breitling collections were presented and admired.`,
    video: "https://alibarbershop.at/files/VIENNA_Ali_Barber_Show_@BREITLING1.mp4",
  },
  {
    title: `Ali Barber Shop <br />
            <b>6th Anniversary & Charity Party</b>`,
    desc: `Ali Barber Shop, the coolest barbershop in town, celebrated its 6th anniversary on May 19th, 2023 and organized another CHARITY EVENT in cooperation with the Lebanese association in Austria, for the Red Cross/Lebanon in favor of the poor people in Lebanon.
    
    <br /> <br />
    
    Ali Barber Shop, the coolest barbershop in town, celebrated its 6th anniversary on May 19, 2023 and once again organized a CHARITY EVENT in cooperation with the Lebanese association in Austria, for the Red Cross/Lebanon for the benefit of the poor people in Lebanon.`,
    video: "https://alibarbershop.at/files/Barbershop_Anniversary_6_years_Ali_Barbershop_charity_event.mp4",
  },
  {
    title: `Ali Barber Shop <br />
            <b>Promo 2019</b>`,
    desc: `Ali Barber Shop, the coolest barbershop in town,
    
    <br /> <br />
    
    Follow us on social media and don't miss any news!
    
    <br /><br />
    
    Ali Barber Shop, the coolest barbershop in town,
    
    <br /><br />
    
    Follow us on social media and don’t miss any news!`,
    video: "https://alibarbershop.at/files/Ali-Barber-Shop-Promo_2019-2.mp4",
  },
  {
    title: "Barbers Academy",
    desc: `Book your barber seminar at the first professional Barbers Academy in Vienna – Austria by Ali Barber (Ali Barber Shop) and Ajnur Aliev (Team Wagner Hair).
    
    <br /> <br />
    
    Book your barbering seminar at the first professional Barbers Academy in Vienna – Austria, led by Ali Barber (Ali Barber Shop) and Ajnur aliev (Team Wagner Hair).`,
    video: "https://alibarbershop.at/files/Barbers_Academy_01.mp4",
    bookNow:true,
  },
  {
    title: "Guerrilla Session Popup",
    desc: `Ali Barber Shop at the 1st and only underground session for music and arts by Guerrilla Session.
    
    <br /> <br/>
    
    Ali Barber at the 1st and only underground session for music and arts by Guerrilla Session.`,
    video: "https://alibarbershop.at/files/Ali-Barber-Shop-Guerrilla-Session.mp4",
  },
  {
    title: "Erste Bank POPUP",
    desc: `Ali Barber Shop at Erste Bank Austria's Event in Vienna.
    
    <br /> <br/>
    
    Ali Barber Shop at the Erste Bank Austria event in Vienna.`,
    video: "https://alibarbershop.at/files/Ali-Barbershop-Erste-Group-Bank-POPUP1.mp4",
  },
  {
    title: "Diesel Fashion Show",
    desc: `Ali Barber Shop ft. Team Wagner Hair at Volksgarten Club (Vienna) preparing and styling Cyrus models for the Diesel Fashion Show.
    
    <br />
    
    Ali Barber Shop together with Team Wagner Hair in Vienna's Volksgarten Club is styling Cyrus models for the big Diesel Fashion Show.`,
    video: "https://alibarbershop.at/files/2018/05/Ali_Barber_Shop_Team_Wagner_Hair_Cyrus-Models_4th-Anniversary_Diesel_Fashionshow_Volksgartenclub.mp4",
  },
  {
    title: "Hugo Boss Pop-up",
    desc: `Ali Barber at Hugo Boss Store in Vienna
    
    <br /> <br />
    
    Ali Barber at the Hugo Boss Store in Vienna`,
    video: "https://alibarbershop.at/files/2018/05/Ali_Barbershop_Hugo_Boss_Popup.mp4",
  },
  {
    title: "Welcome to Ali Barber Shop",
    desc: `Ali Barber Shop Introduction Video
    
    <br /> <br />
    
    Ali Barber Shop introduction clip`,
    video: "https://alibarbershop.at/files/2017/12/Ali_Barber_Shop_01.mp4",
  },
];

const Gallery = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero
        img="https://alibarbershop.at/files/2016/01/DSC_0043.jpg"
        title="Gallery"
      />
      {galleryData.map((item, index) => (
        <ContentAndVideo
          key={index}
          title={item.title}
          desc={item.desc}
          video={item.video}
          bookNow={item?.bookNow}
        />
      ))}
    </main>
  );
};

export default Gallery;