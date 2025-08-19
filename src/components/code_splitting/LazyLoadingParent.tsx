import React, { Suspense, useState } from "react";
let LazyLoadingChild = React.lazy(() => import("./LazyLoadingChild"));
export default function LazyLoadingParent() {
  let [flag, setFlag] = useState(false);

  return (
    <div>
      <p>This is react lazy loaded parent component</p>
      {flag && (
        <Suspense fallback={<div>Loading....</div>}>
          <LazyLoadingChild></LazyLoadingChild>
        </Suspense>
      )}
      <button
        onClick={() => {
          setFlag(true);
        }}
      >
        Click
      </button>
    </div>
  );
}
