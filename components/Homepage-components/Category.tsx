import ShoeCarousel from "./ShoeCarousel";


export const metadata = {
  title: 'Shoe Categories - Premium Footwear Collection',
  description: 'Browse our curated collection of lifestyle, basketball, running, and casual shoes.',
};

export default function Category() {
  return (
    <main className="w-full">
      <ShoeCarousel />
    </main>
  );
}
