"use client";
import React, { useState, useEffect } from "react";
import { GetCategory, GetProduct } from "@/components/Datafetching";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("DINNER");
  const [productData, setProductData] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      const categoryData = await GetCategory();
      setCategories(categoryData);
      const initialProductData = await GetProduct("DINNER");
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
      <Navbar />
      <div className="flex justify-center mx-10 mt-20 lg:mx-28">
        <div className="flex flex-col justify-center text-center">
          <div className="grid justify-center grid-cols-3 gap-4 text-center lg:gap-10 sm:grid-cols-4 lg:grid-cols-6">
            {categories.map((item, index) => (
              <div
                key={index}
                onClick={() => getProduct(item.title)}
                className="text-secondary-normal text-xs sm:text-sm lg:text-base w-20 lg:w-32 border-[1px] p-1 sm:p-2 border-secondary-normal text-center rounded-md hover:bg-secondary-normal hover:text-primary font-semibold cursor-pointer"
              >
                {item.title}
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <div className="flex flex-col items-center p-3 m-5 sm:p-7 sm:m-10 lg:p-10 lg:m-20 bg-secondary-normal">
        <div className="p-[1px] border-2 border-primary">
          <div className="p-[1px] border-2 border-primary">
            {productData.length > 0 && productData[0].tags && productData[0].tags.map((item, index) => (
              <div key={index}>
                {index !== 0 && <div className="p-[0.5px] mt-20 border-2 border-primary" />}
                <div className="pt-6 pb-10">
                  <div className="flex items-center justify-center">
                    <div className="relative flex-grow mx-4 border-t-[1px] border-primary">
                      <span className="absolute left-0 h-1 w-[1px] rounded-full -top-0.5"></span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-widest uppercase text-primary">
                      {item.name}
                    </h1>
                    <div className="relative flex-grow mx-4 border-t-[1px] border-primary">
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
                        <h1 className="font-semibold tracking-widest uppercase text-primary">
                          {data.name}
                        </h1>
                        <p className="text-sm font-light tracking-widest">
                          {data.subtitle}
                        </p>
                        <p className="text-xs tracking-widest">
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
