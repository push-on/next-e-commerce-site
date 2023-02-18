import Link from "next/link";
import { urlFor } from '../lib/client';
type Banner = { heroBanner: { _createdAt: string; _id: string; _rev: string; _type: string; _updatedAt: string; buttonText: string; desc: string; discount: string; image: { _type: string; asset: { _ref: string; _type: string; }; }; largeText1: string; largeText2: string; midText: string; product: string; saleTime: string; smallText: string; }; };

export const HeroBanner = ({ heroBanner }: Banner) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image).toString()} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};
