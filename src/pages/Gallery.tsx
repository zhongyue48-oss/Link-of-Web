import { ImageItem } from "../components/ImageGrid";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export const galleryItems: ImageItem[] = [
  {
    id: "cose",
    src: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/door.jpg",
    title: "Cose",
    detailedImages: [
      { caption: "Cefalu", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Cefalu.jpeg" },
      { caption: "Copenhagen", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Copenhagen.jpg" },
      { caption: "Pienza", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Pienza.jpeg" },
      { caption: "33 or 19", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/33%20or%2019.jpeg" },
      { caption: "Esculapio", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Esculapio.jpeg" },
      { caption: "Lagolo", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Lagolo.jpeg" },
      { caption: "Bomarzo", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Bomarzo.jpeg" },
      { caption: "Shaoxing", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Shaoxing.jpg" },
      { caption: "My Little Sister", url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Chou.jpg" }
    ]
  },
  {
    id: "cosi",
    src: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/window.jpg",
    title: "Così",
    detailedImages: [
      {
        caption: "Unnamed",
        url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/Tulip.jpg"
      },
      {
        caption: "Unnamed",
        url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/winter.jpeg"
      },
      {
        caption: "Unnamed",
        url: "https://raw.githubusercontent.com/zhongyue48-oss/image-for-web/main/night.jpeg"
      }
    ]
  }
];

export function Gallery() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-row gap-16 md:gap-32 px-6">
        {galleryItems.map((item, index) => (
          <Link to={`/gallery/${item.id}`} key={item.id} className="group block text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col items-center gap-6 mix-blend-multiply ${item.id === 'cosi' ? 'scale-[0.8]' : ''}`}
            >
              <div className="w-32 md:w-48 aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
