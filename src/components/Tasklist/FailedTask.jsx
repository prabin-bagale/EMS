import React from "react";

const FailedTask = () => {
  return (
    <div className="h-full w-[400px] p-5 bg-yellow-300 rounded-xl flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
        <h4>5 may 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a product design</h2>
      <p className="mt-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero saepe
        quidem totam minus, dolorum ipsa ut iusto vero maxime quis suscipit
        alias, dolor expedita perferendis iste, deserunt adipisci quam quos!
      </p>
      <div className="mt-2">
        <button className="w-full">Complete</button>
      </div>
    </div>
  );
};

export default FailedTask;
