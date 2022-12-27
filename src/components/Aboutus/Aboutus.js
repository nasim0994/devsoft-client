import React from "react";
import AboutImg from "../../Images/aboutImg.jpeg";

const Aboutus = () => {
  return (
    <div className="lg:flex gap-6 py-6">
      <div className="lg:w-[50%] mb-3 lg:mb-0">
        <img src={AboutImg} alt="" className="w-full rounded-lg" />
      </div>
      <div className="lg:w-[50%]">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <h2 className="text-2xl font-semibold mb-2">DevSoftBd</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus
          voluptatibus omnis totam soluta deleniti quia. Veritatis harum ea
          perferendis tenetur, magni error culpa assumenda. Quaerat consectetur
          corporis quo inventore, ad repudiandae harum deleniti excepturi vero
          aspernatur maiores obcaecati dolorem eveniet repellat quidem autem
          quasi assumenda quis ipsum sequi. In.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
