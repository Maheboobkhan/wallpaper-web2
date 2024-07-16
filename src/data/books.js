const books = {
  nature: [
    { id: 'nat01', title: "Nature Wallpaper 1", price: "₹1800", description: "Wallpaper sfsdf f f sfsf", image: "/nature/nature-01.jpg", samples: [
      { id: 'nat-01', image: "/nature/nature-01.jpg" },
      // { id: 'nat-01', image: "https://res.cloudinary.com/ddvtafbjt/image/upload/c_thumb,w_200,g_face/v1721060437/nature-02_ctarzc.jpg" },
      { id: 'nat-02', image: "https://res.cloudinary.com/ddvtafbjt/image/upload/c_thumb,w_200,g_face/v1721062342/nature-03_y1nptp.jpg" },
      { id: 'nat-03', image: "/nature/nature-04.jpg" }
    ] },
    { id: 'nat02', title: "Nature Wallpaper 2", price: "₹1800", image: "/nature/nature-02.jpg", samples: [
      { id: 'nat-01', imagePreview: "https://res.cloudinary.com/ddvtafbjt/image/upload/c_thumb,w_200,g_face/v1721060437/nature-02_ctarzc.jpg", image: "/nature/nature-01.jpg" },
      { id: 'nat-02', image: "/nature/nature-03.jpg" },
      { id: 'nat-03', image: "/nature/nature-04.jpg" }
    ] },
    { id: 'nat03', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-03.jpg" },
    { id: 'nat04', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-04.jpg" },
    { id: 'nat05', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-05.jpg" },
    { id: 'nat06', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-06.jpg" },
    { id: 'nat07', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-07.jpg" },
    { id: 'nat08', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-08.jpg" },
    { id: 'nat09', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-09.jpg" },
    { id: 'nat10', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-10.jpg" },
    { id: 'nat11', title: "Nature Wallpaper 1", price: "₹1800", image: "/nature/nature-11.jpg" },
    // Add more nature wallpapers here if needed
  ],
  texture: [
    { id: 'tex01', title: "Milan Wallpaper 1", price: "$15", image: "/images/milan1.jpg" },
    { id: 'tex02', title: "Milan Wallpaper 2", price: "$18", image: "/images/milan2.jpg" }
    // Add more texture wallpapers here if needed
  ],
  flower: [
    { id: 'flo01', title: "Kausar Wallpaper 1", price: "$20", image: "/images/kausar1.jpg" },
    { id: 'flo02', title: "Kausar Wallpaper 2", price: "$22", image: "/images/kausar2.jpg" }
    // Add more flower wallpapers here if needed
  ]
};

export default books;
