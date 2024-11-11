import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <section
      id="breadcrumbs"
      className="breadcrumbs"
      style={{ backgroundColor: "steelblue" }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <h2>About</h2>
          <ol className="flex gap-2">
            <li>
              <Link href="/" className="text-white hover:underline">Home</Link>
            </li>
            <li className="text-white">About</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
