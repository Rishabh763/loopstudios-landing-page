import React from "react";

function Work() {    
    
  const items = [
    {
      id: 0,
      title: "Deep earth",
      imaged: "/assets/images/desktop/image-deep-earth.jpg",
      imagem: "/assets/images/mobile/image-deep-earth.jpg",
    },
    {
      id: 1,
      title: "Night arcade",
      imaged: "/assets/images/desktop/image-night-arcade.jpg",
      imagem: "/assets/images/mobile/image-night-arcade.jpg",
    },
    {
      id: 2,
      title: "Soccer team VR",
      imaged: "/assets/images/desktop/image-soccer-team.jpg",
      imagem: "/assets/images/mobile/image-soccer-team.jpg",
    },
    {
      id: 3,
      title: "The grid",
      imaged: "/assets/images/desktop/image-grid.jpg",
      imagem: "/assets/images/mobile/image-grid.jpg",
    },
    {
      id: 4,
      title: "From up above VR",
      imaged: "/assets/images/desktop/image-from-above.jpg",
      imagem: "/assets/images/mobile/image-from-above.jpg",
    },
    {
      id: 5,
      title: "Pocket borealis",
      imaged: "/assets/images/desktop/image-pocket-borealis.jpg",
      imagem: "/assets/images/mobile/image-pocket-borealis.jpg",
    },
    {
      id: 6,
      title: "The curiosity",
      imaged: "/assets/images/desktop/image-curiosity.jpg",
      imagem: "/assets/images/mobile/image-curiosity.jpg",
    },
    {
      id: 7,
      title: "Make it fisheye",
      imaged: "/assets/images/desktop/image-fisheye.jpg",
      imagem: "/assets/images/mobile/image-fisheye.jpg",
    },
  ];
  return (
    <div className="grid-parent py-24">
        <h1 className="text-6xl uppercase text-left font-light tracking-wider title">our creations</h1>
        <button className="uppercase text-lg leading-tight tracking-[5px] px-8 py-2 border-black border-2 bg-white text-black hover:bg-black hover:text-white transition-colors btn">
          see all
        </button>
      <div className="grid-child">
        {items.map((item) => {
          return (
            <div className="card relative h-[420px] overflow-hidden flex items-end p-6">
              <h2 className="capitalize font-light text-4xl text-left text-white transition-color">
                {item.title}
              </h2>
              <img
                className="z-[-1] absolute inset-0 w-[100%]  object-cover object-center transition-opacity"
                srcSet={` ${item.imagem} 500w, ${item.imaged} 1200w`}
                sizes="(max-width: 600px) 500px, 1000px"
                src={item.imaged}
                alt={`${item.title}-image`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
