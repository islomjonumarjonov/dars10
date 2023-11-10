import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function CountriesList() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data &&
          data.map((country) => {
            const {
              name: { common },
              flags: { svg },
              population,
              region,
              capital,
            } = country;
            console.log(common);
            return (
              <li
                key={common}
                className="card w-full card-compact bg-base-100 shadow-xl"
              >
                <Link to={`/singleCountry/${common}`} className="w-full">
                  <figure>
                    <img
                      src={svg}
                      alt={svg + "flag"}
                      className="h-[250px] w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{common}</h2>

                    <div className="text-xl">
                      <p>
                        <span className="font-semibold">Population</span>:
                        {population}
                      </p>
                      <p>
                        <span className="font-semibold">Region</span>: {region}
                      </p>
                      <p>
                        <span className="font-semibold">Capital</span>{" "}
                        {capital ? capital[0] : "No capital"}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CountriesList;
