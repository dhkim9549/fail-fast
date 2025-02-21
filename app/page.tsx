import Image from "next/image";
import Link from "next/link";
import Footer from "./footer.tsx";

function Item({ title, cont, href }) {
  return (
    <Link className="bg-white p-5 m-2 lg:w-96" href={href}>
      <p className="text-slate-900 text-2xl font-bold my-4">{title}</p>
      <div>{cont}</div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="mt-7">
      <div className="text-center lg:text-left lg:ml-10 p-10">
        <blockquote className="text-2xl font-bold italic text-slate-900">
          FAIL FAST
        </blockquote>
      </div>
      <div className="w-full p-4 flex flex-col lg:flex-row lg:flex-wrap">
        <Item
          title="HF 전세자금보증 추천"
          cont="한국주택금융공사에서 제공하는 전세보증 상품 추천 서비스"
          href="hf-api/hg-jnse-rcmd"
        />
        <Item
          title="은행별 전세대출 금리"
          cont="한국주택금융공사 보증서 담보 시중은행 대출의 고객 특성별 금리"
          href="hf-api/rent-loan-multi-info"
        />
      </div>
      <Footer />
    </div>
  );
}
