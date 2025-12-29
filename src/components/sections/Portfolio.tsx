import React, { useState } from "react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

const onScreenMakeup: GalleryImage[] = [
  {
    id: 1,
    src: "https://i.pinimg.com/1200x/a3/79/6e/a3796e4425d7039f5054a2ce50f61ab3.jpg",
    alt: "On Screen Makeup Look",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/e5/20/9f/e5209f2d40402ce9b1b35147869f9521.jpg",
    alt: "On Screen Makeup Look",
  },
    {
    id: 3,
    src: "https://i.pinimg.com/736x/85/2c/60/852c60e8f99189a419264321024191b1.jpg",
    alt: "On Screen Makeup Look",
  },
    {
    id: 4,
    src: "https://i.pinimg.com/1200x/7e/0d/3d/7e0d3d3c020c4b774acf642cfef0c8e6.jpg",
    alt: "On Screen Makeup Look",
  },
    {
    id: 5,
    src: "https://i.pinimg.com/1200x/06/c6/e2/06c6e2ddb08565e01afc58db916f5f07.jpg",
    alt: "On Screen Makeup Look",
  },
    {
    id: 6,
    src: "https://i.pinimg.com/736x/1c/91/4b/1c914b7b4a2e87b056bbb5f7d2c77f06.jpg",
    alt: "On Screen Makeup Look",
  },
    {
    id: 7,
    src: "https://i.pinimg.com/1200x/6f/85/bc/6f85bc2d2441c458d131bc19f671fae6.jpg",
    alt: "On Screen Makeup Look",
  },
    {
    id: 8,
    src: "https://i.pinimg.com/736x/f6/8e/64/f68e6450b8e0d477a6a2606c415ccac8.jpg",
    alt: "On Screen Makeup Look",
  },
];

const bridalMakeup: GalleryImage[] = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2020/02/10/10/10/lippgloss-4835995_640.jpg",
    alt: "Bridal Makeup",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/236x/2b/64/1e/2b641e6ed43f1d68bdabaaa51b17adde.jpg",
    alt: "Bridal Makeup",
  },
    {
    id: 2,
    src: "https://i.pinimg.com/736x/59/5c/3d/595c3dded9b5781e137b71fff96ccf2b.jpg",
    alt: "Bridal Makeup",
  },
    {
    id: 2,
    src: "https://i.pinimg.com/1200x/44/2d/87/442d87022c3d46e59f32eccf9dac4c2b.jpg",
    alt: "Bridal Makeup",
  },
    {
    id: 2,
    src: "https://i.pinimg.com/736x/49/61/59/496159b0e0b7ef2bf96e7ac4273f4623.jpg",
    alt: "Bridal Makeup",
  },
    {
    id: 2,
    src: "https://i.pinimg.com/736x/79/a1/f4/79a1f46ea37ef6e379615eb26d51cb4b.jpg",
    alt: "Bridal Makeup",
  },
    {
    id: 2,
    src: "https://i.pinimg.com/1200x/6d/06/2e/6d062efe80d965796a8ee4531c015117.jpg",
    alt: "Bridal Makeup",
  },
    {
    id: 2,
    src: "https://i.pinimg.com/736x/a3/ef/f6/a3eff66a658ea38ae35f64f5b83b7ef4.jpg",
    alt: "Bridal Makeup",
  },
    

];

const fashionMakeup: GalleryImage[] = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/d4/6a/c3/d46ac33d5153022fa10a73833d725442.jpg",
    alt: "Fashion Makeup",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/1200x/cf/ec/4c/cfec4cf4eef530bfbf1987fc43cf3919.jpg",
    alt: "Fashion Makeup",
  },
    {
    id: 3,
    src: "https://i.pinimg.com/736x/b3/28/60/b328603dc7005760e91937bc92714b09.jpg",
    alt: "Fashion Makeup",
  },
    {
    id: 4,
    src: "https://i.pinimg.com/736x/73/48/07/73480741b9a5d94298433279cf01a4c3.jpg",
    alt: "Fashion Makeup",
  },
    {
    id: 5,
    src: "https://i.pinimg.com/736x/86/c0/8c/86c08c595e17809e0a67991bc3a6adc8.jpg",
    alt: "Fashion Makeup",
  },
];

const GallerySection: React.FC<{
  title: string;
  images: GalleryImage[];
  onImageClick: (img: GalleryImage) => void;
}> = ({ title, images, onImageClick }) => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => onImageClick(image)}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="bg-pink-100  text-black">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4  text-pink-600">
          Our Portfolio
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A collection of our on screen, bridal, and fashion makeup looks
          crafted to enhance beauty and confidence.
        </p>
      </div>

      {/* Galleries */}
      <div className="max-w-6xl mx-auto px-6 pb-24  text-pink-600">
        <GallerySection
          title="On Screen Makeup"
          images={onScreenMakeup}
          onImageClick={setSelectedImage}
        />

        <GallerySection
          title="Bridal Makeup"
          images={bridalMakeup}
          onImageClick={setSelectedImage}
        />

        <GallerySection
          title="Fashion Makeup"
          images={fashionMakeup}
          onImageClick={setSelectedImage}
        />
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
