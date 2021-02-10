// import { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { useDebounce } from "use-debounce";
import Layout from "src/components/layout";
<<<<<<< HEAD
// import Map from "src/components/map";
=======
import Map from "src/components/map";
>>>>>>> eaee0e8b3292a4127beadf19dec399fa260150b5
// import HouseList from "src/components/houseList";
// import { useLastData } from "src/utils/useLastData";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery, HousesQueryVariables } from "src/generated/HousesQuery";

export default function Home() {
<<<<<<< HEAD
  return <Layout main={<div>Home</div>} />;
=======
  return (
    <Layout
      main={
        <div className="flex">
          <div
            className="w-1/2 pb-4"
            style={{ maxHeight: "calc(100vh - 64px)", overflowX: "scroll" }}
          >
            HouseList
          </div>
          <div className="w-1/2">
            <Map />
          </div>
        </div>
      }
    />
  );
>>>>>>> eaee0e8b3292a4127beadf19dec399fa260150b5
}
