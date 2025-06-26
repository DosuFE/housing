import Link from 'next/link';

const postData = {
  '1': {
    title: 'The Future of Real Estate',
    content: 'Explore how technology and new trends are shaping the real estate market for buyers, sellers, and investors.',
    image: '/assets/los_Angeles.jpg',
    feature: 'Trending',
  },
  '2': {
    title: 'Tips for First-Time Home Buyers',
    content: 'Buying your first home can be daunting. Here are essential tips to help you make the right decision and avoid common pitfalls.',
    image: '/assets/los_angeles_1.jpg',
    feature: 'Guide',
  },
  '3': {
    title: 'How to Stage Your Home for Sale',
    content: 'Staging your home can increase its value and appeal. Learn the best practices to make your property stand out.',
    image: '/assets/los_angeles_2.jpg',
    feature: 'How-To',
  },
};

export default function BlogPost({ params }) {
  const { postId } = params;
  const post = postData[postId] || {
    title: `Blog Post #${postId}`,
    content: 'This is a placeholder for the blog post content.',
    image: '/assets/los_Angeles.jpg',
    feature: 'Blog',
  };

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <div className="blog-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col mb-8">
        <div className="relative">
          <img src={post.image} alt={post.title} className="housing-3d-img h-64 w-full object-cover" />
          <span className="feature-badge absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{post.feature}</span>
          <span className="estate-icon absolute bottom-4 right-4 text-white text-3xl drop-shadow">🏡</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-sky-800 estate-title">{post.title}</h1>
      <p className="mb-8 text-gray-700 text-lg leading-relaxed">{post.content}</p>
      <Link href={`/blog/${postId}/section/1`} className="inline-block px-6 py-2 bg-sky-500 text-white rounded font-semibold shadow hover:bg-sky-600 transition">Go to Section 1 of this post</Link>
    </main>
  );
} 