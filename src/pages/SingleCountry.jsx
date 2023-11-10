import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleCountry() {
  const { country } = useParams();
  const url = "https://restcountries.com/v3.1/name/" + country;
  const { data: info, isPending, error } = useFetch(url);
  if (info) {
    console.log(info[0]);
  }

  return <div></div>;
}

export default SingleCountry;
