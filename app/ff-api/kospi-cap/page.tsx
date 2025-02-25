"use client";

import { useState } from "react";
import { useEffect } from "react";

import Title from "@/app/ui/title";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

import DataGrid from "./m-table";
import BChart from "./b-chart";
import MySkel from "./MySkel";
import { getKospiCap } from "./get-data";

export default function RentLoanMultiInfo() {
  let [stockList, setStockList] = useState([]);
  let [chartData, setChartData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log("getData() start...");

    setChartData();

    let items = await getKospiCap({});

    setStockList(items);

    let chartDataArr = [];
    items.forEach((e) => {
      let eDataArr = [];
      eDataArr.push(e.name);
      eDataArr.push(e.cap);
      chartDataArr.push(eDataArr);
    });
    let chartDataObj = { chartDataArr: chartDataArr };
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
            <div className="mt-16 sm:mt-0 px-8 w-full lg:w-[700px]">
              <div className="mb-4 w-full text-center">Kospi (top 50)</div>
              <div className="">
                <BChart chartData={chartData} />
              </div>
            </div>
            <div className="w-full sm:w-[350px]">
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
