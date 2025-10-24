"use server";

export async function getLoanRateData(loanYm) {
  console.log("getLoanRateData() start...");

  const apiStr =
    "" +
    "?serviceKey=FMlDZea1lXraZUHfgkfivAF3QAUV%2FNkhRUFRRfHYn1osLEHq2oUYbWhqbrlZ67ltk9DOeIFdLnLSWRbHJxtt6g%3D%3D" +
    "&pageNo=1" +
    "&numOfRows=30" +
    "&dataType=JSON";
  const res = await fetch(
    "https://apis.data.go.kr/B551408/rent-loan-rate-multi-dimensional-info/dimensional-list" +
      apiStr +
      "&loanYm=" +
      loanYm,
    { next: { revalidate: 600 } },
  );

  const rentJson = await res.json();

  console.log("getLoanRateData() end...");

  return rentJson.body.items;
}
