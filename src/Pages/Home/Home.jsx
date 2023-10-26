import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Layout from "../../Components/Layout/Layout";
function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
