import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function SingleCountry() {
  const { country } = useParams();
  const url = "https://restcountries.com/v3.1/name/" + country;
  const { data: info, isPending, error } = useFetch(url);

  if (info) {
    const {
      flags: { svg },
      name: { common },
      languages,
      population,
      region,
      subregion,
      capital,
      borders,
    } = info[0];
    console.log(info[0], svg, common);
    return (
      <>
        <div className="py-20">
          <Link className="btn btn-square px-5" to="/">
            Back
          </Link>
        </div>
        <div className="flex gap-20">
          <img src={svg} alt="" className="w-[560px] rounded" />
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-extrabold">{common}</h1>
            <div className=" flex flex-col gap-1">
              <p>
                <span className="font-bold">Population: </span> {population}
              </p>
              <p>
                <span className="font-bold">Region: </span> {region}
              </p>
              <p>
                <span className="font-bold">Sub region: </span> {subregion}
              </p>
              {capital ? (
                <p>
                  <span className="font-bold">Capital: </span> {capital}
                </p>
              ) : (
                <p>No capital</p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-l font-semibold">Border Countries:</h2>
              <div className="flex  gap-1">
                {borders.map((border) => {
                  return (
                    <Link
                      key={border}
                      className="btn"
                      to={`/singleCountry/${border}`}
                    >
                      {border}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div></div>;
}

export default SingleCountry;
