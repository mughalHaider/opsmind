type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function Home() {
  let products: Product[] = [];
  let error = "";
  const intentionalError: string = 123;

  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=20", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Unable to load products.");
    }

    const data: Product[] = await response.json();
    products = data.slice(0, 20);

    // Temporary server-side log. This appears in the Next.js terminal.
    console.log("Fetched products:", products);
  } catch (fetchError) {
    error =
      fetchError instanceof Error
        ? fetchError.message
        : "Unable to load products.";
    console.error("Product fetch failed:", fetchError);
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Fake Store API
          </p>
          <p>Hey there! I am joining the fake store API.</p>
          please note that this page fetches product data from the Fake Store API. If you encounter any issues, it might be due to the API being down or unreachable. In such cases, an error message will be displayed below.
          <h1 className="text-4xl font-bold tracking-tight">Products</h1>
        </header>

        {error && <p className="text-red-600">{error}</p>}

        {!error && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="flex h-64 items-center justify-center bg-white p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-zinc-100 p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    {product.category}
                  </p>
                  <h2 className="line-clamp-2 text-lg font-semibold">
                    {product.title}
                  </h2>

                  <p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p>
                  <p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p><p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p><p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p>
                  <p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p>
                  <p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p><p>
                    any text you want to add here, for example, a brief summary or additional information about the product. This can help users understand more about what they are looking at and make informed decisions when browsing through the products.
                  </p>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600">
                    {product.description}
                  </p>
                  <p className="mt-5 text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
