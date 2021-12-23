import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../store/reviewFeed";
import "./Home.css";
import CocktailList from "../CocktailList";
import ShowAllReviews from "../ShowAllReviews";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const allReviewsObj = useSelector((state) => state.reviewFeed);
  const allReviews = Object.values(allReviewsObj);

  return (
    <div className="home_cocktails_reviews">
      <div className="home_cocktail_list">
        <CocktailList />
      </div>
      <div className="review_feed_div">
      {/* <h1 className="text_large">See what people are saying</h1> */}
      {allReviews.map(
        ({ id, reviewRating, reviewBody, Cocktail, User }) => {
          return (
            <ShowAllReviews
              key={id}
              id={id}
              reviewRating={reviewRating}
              reviewBody={reviewBody}
              cocktail={Cocktail}
              user={User}
            />
          );
        }
      )}
      </div>
    </div>
  );
};

export default Home;
