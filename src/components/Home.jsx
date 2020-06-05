import React, { useEffect, useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";
import { useHomeFetch } from "./hooks/useHomeFetch";

function Home() {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);
  return (
    <div>
      <HeroImage />
      <LoadMoreBtn />
      <Grid />
      <MovieThumb />
      <SearchBar />
      <Spinner />
    </div>
  );
}

export default Home;
