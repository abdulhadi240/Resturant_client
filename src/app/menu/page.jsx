"use client";
import React, { useState, useEffect } from "react";
import { GetCategory, GetProduct } from "@/components/Datafetching";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("STARTERS");
  const [productData, setProductData] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      const categoryData = await GetCategory();
      setCategories(categoryData);
      const initialProductData = await GetProduct("STARTERS");
      setProductData(initialProductData);
      setDesc(initialProductData[0]?.about || "");
    };

    fetchInitialData();
  }, []);

  const getProduct = async (itemName) => {
    setSelectedProduct(itemName);
    const products = await GetProduct(itemName);
    setProductData(products);
    setDesc(products[0]?.about || "");
    console.log(products);
  };

  return (
    <>
      
      <div className="flex justify-center mx-6 mt-20 lg:mx-28">
        <div className="flex flex-col justify-center text-center">
          <div className="grid justify-center grid-cols-3 gap-4 text-center lg:gap-10 sm:grid-cols-4 lg:grid-cols-5">
            {categories.map((item, index) => (
              <div
                key={index}
                onClick={() => getProduct(item.title)}
                className="text-black text-[10px] sm:text-sm lg:text-base  items-center w-auto lg:w-44 border-[1px] p-1 sm:p-2 border-black text-center rounded-md hover:bg-black hover:text-white font-semibold cursor-pointer"
              >
                {item.title}
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <div className="flex flex-col items-center p-3 m-5 bg-black sm:p-7 sm:m-10 lg:p-10 lg:m-20">
        <div className="p-[1px] w-full border-2 border-white">
          <div className="p-[1px] border-2 border-white ">
            {productData.length > 0 && productData[0].tags && productData[0].tags.map((item, index) => (
              <div key={index}>
                {index !== 0 && <div className="p-[0.5px] mt-20 border-2 border-white" />}
                <div className="pt-6 pb-10">
                  <div className="flex items-center justify-center">
                    <div className="relative flex-grow mx-4 border-t-[1px] border-white">
                      <span className="absolute left-0 h-1 w-[1px] rounded-full -top-0.5"></span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-widest text-red-500 uppercase">
                      {item.name}
                    </h1>
                    <div className="relative flex-grow mx-4 border-t-[1px] border-white">
                      <span className="absolute right-0 h-[1px] w-[1px] rounded-full -top-0.5"></span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 sm:grid-cols-2 gap-14">
                    {item.tags.map((data, i) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        key={i}
                        className="flex flex-col items-center text-center"
                      >
                        <h1 className="font-semibold tracking-widest text-white uppercase">
                          {data.name}
                        </h1>
                        <p className="text-sm font-light tracking-widest text-white">
                          {data.subtitle}
                        </p>
                        <p className="text-xs tracking-widest text-white">
                          {data.number}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;