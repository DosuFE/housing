import Link from 'next/link';

const posts = [
  {
    id: '1',
    title: 'The Future of Real Estate',
    summary: 'Exploring trends and technology in the housing market.',
    image: '/assets/los_Angeles.jpg',
    feature: 'Trending',
  },
  {
    id: '2',
    title: 'Tips for First-Time Home Buyers',
    summary: 'Essential advice for making your first purchase.',
    image: '/assets/los_angeles_1.jpg',
    feature: 'Guide',
  },
  {
    id: '3',
    title: 'How to Stage Your Home for Sale',
    summary: 'Maximize your home value with these staging tips.',
    image: '/assets/los_angeles_2.jpg',
    feature: 'How-To',
  },
];

export default function BlogPreview() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.id} className="blog-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col relative">
            <div className="relative">
              <img src={post.image} alt={post.title} className="housing-3d-img h-56 w-full object-cover" />
              <span className="feature-badge absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{post.feature}</span>
              <span className="estate-icon absolute bottom-4 right-4 text-white text-3xl drop-shadow">🏡</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-sky-700">{post.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{post.summary}</p>
              <Link href={`/blog/${post.id}`} className="inline-block mt-auto px-4 py-2 bg-sky-500 text-white rounded font-semibold shadow hover:bg-sky-600 transition">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}