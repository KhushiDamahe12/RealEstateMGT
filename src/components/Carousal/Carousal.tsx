import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { IconType } from 'react-icons';
import { FaHome, FaPaintBrush, FaDollarSign, FaHeadset, FaLeaf, FaLightbulb } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import your custom arrow icons


const cardData = [
    {
        id: 1,
        title: 'Potential ROI',
        description: [
            "Whether you are looking to buy a home or renovate your current home for resale, we will work to ensure you get the best value in the process."
        ],
        icon: FaHome,
    },
    {
        id: 2,
        title: 'Design',
        description: [
            "Our in-house design team will guide you through your design options and coordinating selections to create the home of your dreams."
        ],
        icon: FaPaintBrush,
    },
    {
        id: 3,
        title: 'Marketing',
        description: [
            "Having been actively working within the real estate market, our marketing plans accompany every home to reach today's buyers."
        ],
        icon: FaDollarSign,
    },
    {
        id: 4,
        title: 'Customer Support',
        description: [
            "Our dedicated customer support team is here to assist you with any queries or issues, ensuring a smooth and pleasant experience."
        ],
        icon: FaHeadset,
    },
    {
        id: 5,
        title: 'Sustainability',
        description: [
            "We prioritize sustainable practices in all our projects, aiming to reduce environmental impact and promote eco-friendly living."
        ],
        icon: FaLeaf,
    },
    {
        id: 6,
        title: 'Innovation',
        description: [
            "Embracing the latest technologies and innovative solutions to deliver exceptional results and exceed client expectations."
        ],
        icon: FaLightbulb,
    },
];


function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        color: "black",
        background: "none", // No background
        width: "40px", // Optional, adjust as needed
        height: "40px", // Optional, adjust as needed
        
      }}
      children={  <FaChevronRight size={24} />}
      onClick={onClick}
    >

    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      color: "black",
      background: "none", // No background
      width: "40px", // Optional, adjust as needed
      height: "40px", // Optional, adjust as needed
    }}
    children={  <FaChevronLeft size={24} />}
    onClick={onClick}
  >
  </div>
  );
}

const InfoCard = ({ icon: Icon, title, description, isActive }: InfoCardInterface) => {
  
  return(
  
  <div
    className={` h-[375px] custom-tiny-height-Info lg700:h-[620px] md:h-[530px] lg:h-[480px] xl:h-[420px] 2xl:h-[380px]  w-full p-8  min-h-[320px]  rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 transform  ${
      isActive ? 'bg-cadetblue scale-105 shadow-lg' : 'bg-gray-100'
    }`}
  >
    <Icon className={`text-5xl mb-4 ${isActive ? 'text-blueTheme' : 'text-gray-600'}`} />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ul className="text-gray-600 list-disc list-inside flex-grow">
      {description.map((point, index) => (
        <li key={index} className="mb-1 text-left text-blueTheme">{point}</li>
      ))}
    </ul>
  </div>
)
};

const FeaturesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024, // For desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <style>
        {`
          .slick-next::before,
          .slick-prev::before {
            display: none !important; /* Hides the default Slick arrow icons */
          }
            @media (max-width: 360px) {
  .custom-tiny-height-Info {
    height: 470px; /* Height for screens up to 352px */
  }
  .custom-tiny-height-div {
    height: 500px; /* Height for screens up to 352px */
  }
}
        `}
      </style>
      <div className="bg-blue-50 py-8 px-8">
        <h2 className="text-center font-bold text-xl mb-6">Explore What We Offer</h2>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className={`${index === activeIndex?'pt-4':'pt-6'} rounded-t-lg  px-2 md:px-3 lg:px-8 flex h-[375px] custom-tiny-height-div lg700:h-[640px] lg700:mb-4 md:h-[550px] lg:h-[500px] xl:h-[440px] 2xl:h-[400px]`}>
              <div className="flex-grow"> {/* Added flex-grow to allow equal heights */}
                <InfoCard icon={card.icon} title={card.title} description={card.description} isActive={index === activeIndex} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FeaturesCarousel;


interface InfoCardInterface{
  icon:IconType,
  title:string,
  description:Array<string>,
  isActive:boolean
}
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}