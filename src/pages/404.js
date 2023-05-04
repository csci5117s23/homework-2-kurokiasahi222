import Link from "next/link";
import Header from "@/components/Header";

export default function Custom404Page() {
  return (
    <div>
      <Header/>
      <div>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}