import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import MasonryLayout from "./MasonryLayout.jsx";
import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utills/data";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner message="We are adding new ideas!" />;
  if (!pins?.length)
    return <h2 className="text-red-500">No images right now!</h2>;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;