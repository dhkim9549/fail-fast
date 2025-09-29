"use client";

import { useState } from "react";
import { useEffect } from "react";

import DataGrid from "./m-table";
import BChart from "./b-chart";
import MySkel from "./MySkel";
import { getKospiCap } from "./get-data";

export default function RentLoanMultiInfo() {
  const [stockList, setStockList] = useState([]);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log("getData() start...");

    setChartData();

    const items = await getKospiCap({});

    setStockList(items);

    const chartDataArr = [];
    items.forEach((e) => {
      const eDataArr = [];
      eDataArr.push(e.stockNm);
      eDataArr.push(e.stockCap);
      chartDataArr.push(eDataArr);
    });
    const chartDataObj = { chartDataArr: chartDataArr };
    setChartData(chartDataObj);

    console.log("getData() end...");
  }

  return (
    <div className="">
      <div className="text-center my-10 py-10 lg:text-left lg:m-10 lg:p-10">
        <blockquote className="text-2xl font-bold italic text-slate-900">
          Kospi
        </blockquote>
      </div>
      <div className="m-4 flex flex-wrap">
        {chartData ? (
          <>
            <div className="mt-16 sm:mt-0 px-0 lg:px-8 w-full lg:w-[700px]">
              <div className="mb-4 w-full text-center">Kospi (top 50)</div>
              <div className="">
                <BChart chartData={chartData} />
              </div>
            </div>
            <div className="w-full sm:w-[430px]">
              <DataGrid stockList={stockList} />
            </div>
          </>
        ) : (
          <MySkel />
        )}
      </div>
    </div>
  );
}
