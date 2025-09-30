"use server";

export async function getKospiCap(queryObj) {
  console.log("getKospiCap() start...");
  console.log("queryObj = " + JSON.stringify(queryObj));

  const API_URL = process.env.API_SERVER_URL;

  const res = await fetch(API_URL + "/api/get-kospi-cap", {
    next: { revalidate: 10 },
  });

  const resJson = await res.json();

  console.log("getKospiCap() end...");

  return resJson;
}
