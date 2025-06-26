export default async function HouseDetails({ params }) {
    const housesDetails = [
        {
            id: 1,
            name: 'Living House',
            image: '/assets/living_house.jpg',
            description: 'A beautiful living house with modern amenities and spacious interiors.',
            price: '$500,000',
            location: '123 Main St, Springfield',
            features: ['3 Bedrooms', '2 Bathrooms', 'Large Garden', 'Garage'],
            exterior: {
                plotSize: '5000 sqft',
                yearBuilt: 2015,
                exteriorFinish: 'Brick',
                roofType: 'Shingle',
                parking: '2 Car Garage',
                garden: 'Yes',
                security: '24/7 Surveillance',
                heating: 'Central Heating',
                cooling: 'Central Air Conditioning',
                energyEfficiency: 'Energy Star Rated',
            },
        },
        {
            id: 2,
            name: 'House Villa',
            image: '/assets/house_villa.jpg',
            description: 'Luxurious villa with stunning views and high-end finishes.',
            price: '$1,200,000',
            location: '456 Elm St, Springfield',
            features: ['5 Bedrooms', '4 Bathrooms', 'Swimming Pool', 'Home Theater'],
            exterior: {
                plotSize: '8000 sqft',
                yearBuilt: 2018,
                exteriorFinish: 'Stucco',
                roofType: 'Tile',
                parking: '3 Car Garage',
                garden: 'Yes',
                security: 'Smart Home Security System',
                heating: 'Radiant Floor Heating',
                cooling: 'Ductless Mini-Split AC',
                energyEfficiency: 'LEED Certified',
            },
        },
        {
            id: 3,
            name: 'Office Floor',
            image: '/assets/office_floor.jpg',
            description: 'Modern office space with open floor plan and high-speed internet.',
            price: '$750,000',
            location: '789 Oak St, Springfield',
            features: ['Open Space', 'Conference Room', 'Kitchenette', 'Parking'],
            exterior: {
                plotSize: '3000 sqft',
                yearBuilt: 2020,
                exteriorFinish: 'Glass and Steel',
                roofType: 'Flat',
                parking: '1 Car Parking',
                garden: 'No',
                security: 'Keycard Access',
                heating: 'Forced Air Heating',
                cooling: 'Central AC',
                energyEfficiency: 'Green Building Certified',
            },
        },
        {
            id: 4,
            name: 'House Apartment',
            image: '/assets/house_apartment.jpg',
            description: 'Cozy apartment in a prime location with easy access to amenities.',
            price: '$300,000',
            location: '321 Pine St, Springfield',
            features: ['2 Bedrooms', '1 Bathroom', 'Balcony', 'Gym'],
            exterior: {
                plotSize: '1500 sqft',
                yearBuilt: 2012,
                exteriorFinish: 'Vinyl Siding',
                roofType: 'Asphalt Shingle',
                parking: '1 Car Parking Spot',
                garden: 'No',
                security: 'Gated Community Security',
                heating: 'Baseboard Heating',
                cooling: 'Window AC Units',
                energyEfficiency: 'Energy Efficient Appliances',
            },
        }
    ];
    const { productId } = params;
    const product = housesDetails.find((house)=> house.id === parseInt(productId))
if(!product){
        return <h1 className="text-center text-2xl font-bold text-red-600 mt-20">Product Not Found</h1>
}
    return(
        <main className="min-h-screen bg-gray-50 py-8 px-2 sm:px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 border-b border-gray-200 pb-2 tracking-wider leading-relaxed">
                    {product.name} Overview
                </h1>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-12">
                    {/* Image Section */}
                        <div className="w-full md:w-2/5 flex items-center justify-center mb-4 md:mb-0">
                        <img
                            src={product.image}
                            alt={product.name}
                                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow border border-gray-100"
                        />
                    </div>
                    {/* Details Section */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <p className="text-xl  mb-3 tracking-wider text-gray-700">{product.description}</p>
                                <p className="text-xl sm:text-2xl font-semibold mb-3 leading-loose tracking-wide text-sky-300">Price: {product.price}</p>
                                <p className="text-lg sm:text-xl mb-3 leading-loose tracking-wide text-gray-600">Location: <span className="font-medium text-gray-800">{product.location}</span></p>
                                <h2 className="text-xl sm:text-2xl font-semibold mb-3 mt-5 tracking-wider leading-relaxed text-gray-800">Features:</h2>
                                <ul className="list-disc pl-6 mb-3 leading-relaxed tracking-normal text-gray-700 text-base sm:text-lg">
                            {product.features.map((feature, index) => (
                                        <li key={index} className="text-base sm:text-lg font-normal">{feature}</li>
                            ))}
                        </ul>
                            </div>
                        </div>
                    </div>
                    {/* Exterior Details Section - full width below */}
                    <div className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-wider leading-relaxed text-gray-800">Exterior Details:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden bg-gray-50 text-lg">
                            {Object.entries(product.exterior).map(([key, value], idx) => (
                                <div key={key} className={`flex border-b border-gray-200 last:border-b-0 sm:border-b-0 sm:border-r ${idx % 2 === 1 ? 'sm:border-r-0' : ''}`}>
                                    <div className="w-1/2 px-4 py-4 font-semibold capitalize bg-gray-100 text-gray-700 border-r border-gray-200 tracking-wide leading-loose">{key.replace(/([A-Z])/g, ' $1')}</div>
                                    <div className="w-1/2 px-4 py-4 text-gray-800 tracking-wide leading-loose">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}