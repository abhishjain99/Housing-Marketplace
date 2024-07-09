import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // get to know if it is for sale or rent
import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore"; // startAfter for pagination
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

function Category() {
  // Component level states
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  const params = useParams(); // rent or sale after /category/____

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference for collection
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(1)
        );
        // limit(10) will limit it to 10. But what if we have more? We do pagination. We will use startAfter.

        // Execute query
        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };

    fetchListings();
  }, [params.categoryName]);

  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, "listings");

      // Create a query
      const q = query(
        listingsRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(1)
      );

      // Execute query
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);

      const listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listings");
    }
  };

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for rent"
            : "Places for sale"}
        </p>
      </header>

      {loading
        ? (<Spinner />)
        : listings && listings.length > 0 ? (
          <>
            <main>
              <ul className="categoryListings">
                {listings.map((listing) => (
                  <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
                ))}
              </ul>
            </main>

            <br />
            <br />
            {lastFetchedListing && (
              <p className="loadMore" onClick={onFetchMoreListings}>
                Load More
              </p>
            )}
          </>
        )
        : ( <p>No listings for {params.categoryName}</p> )
      }
    </div>
  );
}

export default Category;
