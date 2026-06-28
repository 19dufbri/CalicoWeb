import { useEffect, useState } from "react";
import './index.css';

export function ListingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setListingApiResponse] = useState<ListingApiResponse>({ status: 'ok', listings: [] });

  useEffect(() => {
    const fetchData = async () => {
      const listings = await get_listings();
      setListingApiResponse(listings);
      setIsLoading(false)
    }

    fetchData();
  }, []);

  return (
    <>
      <span className="eyebrow">Current inventory</span>
      <h2 className="subhero-text">Available Consoles</h2>

      {isLoading && <div className="loading">Loading...</div>}
      {apiResponse.status == 'err' && <div className="api-error">Something went wrong!</div>}
      {apiResponse.status == 'ok' && (
        <section className="listing-cards">
          {apiResponse.listings.map(listing => (
            <div className="listing-card" key={listing.id} onClick={() => alert(`Opens eBay for ${listing.name}`)}>
              <h3>{listing.name}</h3>
              <div>{listing.description}</div>
              <div className="price">${listing.price}</div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

interface Listing {
  id: number,
  name: string,
  description: string,
  price: number,
}

interface ListingOkResponse {
  status: 'ok',
  listings: Listing[],
}

interface ListingErrResponse {
  status: 'err',
  error: string,
}

type ListingApiResponse = ListingOkResponse | ListingErrResponse;

async function get_listings(): Promise<ListingApiResponse> {
  return new Promise(resolve => {
    resolve({
      status: 'ok',
      listings: [
        {
          id: 0,
          name: "PlayStation 3 Slim",
          description: "HDMI port cleaned, thermal paste replaced, new controller included",
          price: 89
        },
        {
          id: 1,
          name: "Xbox 360 S",
          description: "RROD fix applied, disc drive replaced, fully functional",
          price: 74
        },
        {
          id: 2,
          name: "Nintendo DS Lite",
          description: "New shell installed, hinge repaired, both screens clear",
          price: 55
        },
        {
          id: 3,
          name: "PSP 3000",
          description: "New battery, UMD drive serviced, screen polished",
          price: 68
        },
        {
          id: 4,
          name: "GameCube",
          description: "Powers on, disc read issues present — good for parts or modding",
          price: 42
        },
        {
          id: 5,
          name: "PlayStation 2 Fat",
          description: "Laser replacement in progress — available soon",
          price: 65
        },
      ]
    });
  });
}