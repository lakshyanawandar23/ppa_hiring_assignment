// components/Carousel.js
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function CustomCarousel() {
//     const images = [
//         { src: '/images/image1.jpg', alt: 'Slide 1' },
//         { src: '/images/image2.jpg', alt: 'Slide 2' },
//         { src: '/images/image3.jpg', alt: 'Slide 3' },
//       ];
    
//       return (
//         <div className="w-full h-[400px] md:h-[600px]">
//           <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
//             {images.map((image, index) => (
//               <div key={index} className="relative w-full h-full">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   sizes='100vw'
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="rounded-lg"
//                 />
//                 <p className="legend">{image.alt}</p>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       );
// }
return (
  <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows >
    <div>
      <Image src="/images/image1.jpg" alt="Slide 1" width={800} height={600} />
    </div>
    <div>
      <Image src="/images/image2.jpg" alt="Slide 2" width={800} height={600} />
    </div>
    <div>
      <Image src="/images/image3.jpg" alt="Slide 3" width={800} height={600} />
    </div>
  </Carousel>
);
}