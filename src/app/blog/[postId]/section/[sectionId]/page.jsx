const sectionContent = {
  '1': {
    title: 'How Technology is Shaping the Future of Real Estate',
    text: `In today's rapidly evolving real estate market, technology is revolutionizing how we buy, sell, and experience property. From AI-powered home searches to immersive virtual reality tours, buyers can now explore homes from anywhere in the world. Blockchain and smart contracts are making transactions more secure and efficient, while augmented reality helps buyers visualize renovations before making a purchase. Embracing these innovations means a smarter, faster, and more transparent real estate experience for everyone.`,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Modern city/tech
    imageAlt: 'Futuristic city skyline with digital network overlay',
  },
  '2': {
    title: 'Essential Steps for First-Time Home Buyers',
    text: `Buying your first home is a major milestone. Start by setting a realistic budget and getting pre-approved for a mortgage. Research neighborhoods, make a list of must-have features, and work with a trusted real estate agent. Don't skip the home inspection, and be prepared to negotiate. With the right preparation, your first home purchase can be smooth and rewarding.`,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Home keys/door
    imageAlt: 'Hand holding house keys in front of a new home',
  },
  '3': {
    title: 'Staging Your Home for a Successful Sale',
    text: `Staging your home can make a big difference in attracting buyers and maximizing your sale price. Start by decluttering and deep cleaning every room. Use neutral colors and arrange furniture to highlight space and flow. Add fresh flowers or plants for a welcoming touch. Professional photos and virtual tours can help your home stand out online.`,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80', // Staged living room
    imageAlt: 'Beautifully staged living room with modern decor',
  },
};

export default function BlogSection({ params }) {
  const { postId, sectionId } = params;
  const content = sectionContent[postId] || {
    title: `Section ${sectionId} of Blog Post ${postId}`,
    text: 'This is a placeholder for this section.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern city skyline',
  };

  return (
    <main className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4 text-sky-800 estate-title">{content.title}</h1>
      <img src={content.image} alt={content.imageAlt} className="w-full h-56 object-cover rounded-xl shadow-lg mb-6" />
      <p className="text-gray-700 text-lg leading-relaxed mb-8">{content.text}</p>
      <div className="text-sm text-gray-400">Section {sectionId} of Blog Post {postId}</div>
    </main>
  );
} 