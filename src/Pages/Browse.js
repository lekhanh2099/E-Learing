import React, { useEffect, useState } from "react";
import BillboardContainer from "../Containers/Billboard";
import CompanyContainer from "../Containers/Company";
import CoursesHomeContainer from "../Containers/CoursesHome";
import LoadingContainer from "../Containers/Loading";
import RecommendContainer from "../Containers/Recommend";
import SlideLoginContainer from "../Containers/SlideLogin";
import TrendingContainer from "../Containers/Trending";

export default function Browse(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {};
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <div>
          <BillboardContainer />
          <SlideLoginContainer />
          <RecommendContainer />
          <TrendingContainer />
          <CoursesHomeContainer props={props} />
          <CompanyContainer />
        </div>
      )}
    </>
  );
}
