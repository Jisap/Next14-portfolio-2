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


const toolboxItems =[
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
    <div className="pb-96">
      <SectionHeader 
        eyebrown="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspire me"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspective</p>
          </div>
          <Image 
            src={bookImage}
            alt="Book cover"
          />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the technologies and tools I use to craft exceptional digital experiences</p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the code</h3>
            <p>Explore my interest and hobbies beyond the digital realm</p>
          </div>
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
  )
};
