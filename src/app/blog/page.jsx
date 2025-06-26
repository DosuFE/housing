import Link from 'next/link';

const posts = [
  { id: '1', title: 'The Future of Real Estate', summary: 'Exploring trends and technology in the housing market.' },
  { id: '2', title: 'Tips for First-Time Home Buyers', summary: 'Essential advice for making your first purchase.' },
  { id: '3', title: 'How to Stage Your Home for Sale', summary: 'Maximize your home value with these staging tips.' },
];

export default function BlogList() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <Link href={`/blog/${post.id}`} className="text-2xl font-semibold text-sky-700 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
} 