import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReacIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'Reac',
    iconType: ReacIcon
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '🎞',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
  {
    title: 'Music',
    emoji: '🎷',
  },
  {
    title: 'Fitness',
    emoji: '👟',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
]


export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrown="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspire me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader 
              title="My Reads" 
              description="Explore the books shaping my perspectives." 
            />
            <div className="w-40 mx-auto mt-8">
              <Image
                src={bookImage}
                alt="Book cover"
              />
            </div>
          </Card>

          <Card>
            <CardHeader
              title="My Tools"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
            />
            <ToolboxItems 
              items={toolboxItems}
              className="mt-6"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="Beyond the code"
              description="Explore my interest and hobbies beyond the digital realm."
              className="px-6 pt-6"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image
              src={mapImage}
              alt="map"
            />
            <Image
              src={smileMemoji}
              alt="smiling memoji"
            />
          </Card>
        </div>
      </div>
    </div>
  )
};
