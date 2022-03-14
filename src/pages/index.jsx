import Head from "next/head";
import Image from "next/image";
import { Gallery } from "../components/Gallery/Gallery";
import { Header } from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import { dbConnect } from "@lib/dbConnect";
import Product from "@models/Product";
import React, { useState, useEffect } from "react";
import { GalleryContext } from "components/GalleryContext/GalleryContext";
import { ProductInfo } from "components/ProductInfo/ProductInfo";

export default function Home({ products }) {
  const [images, setImages] = useState([]);
  const firstImg = products[0].images[0].full;

  useEffect(() => {
    products.map((product) => {
      const imgs = product.images;
      setImages(imgs);
    });
  }, [products]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/" />
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.productContainer}>
          <Gallery images={images} products={products} firstImg={firstImg} />
        </div>
        <ProductInfo products={products} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Product.find({});

    const products = res.map((item) => {
      const product = item.toObject();
      product._id = `${product._id}`;
      return product;
    });

    return { props: { products } };
  } catch (error) {
    console.log(error);
  }
}
