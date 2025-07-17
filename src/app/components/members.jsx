"use client"
import { useEffect, useState } from "react"

export default function Members(){
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        async function fetchMembers() {
            try {
                const response = await fetch('/api'); // Assuming /api points to your route.js
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error("Failed to fetch members:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMembers();
    }, []);

    // Determine which members to show
    const displayedMembers = showAll ? members : members.slice(0, 3);

    return(
        <div>
           
            {loading ? (
                <p className="flex items-center justify-center
                    text-2xl md:text-3xl lg:text-5xl font-bold uppercase 
                    tracking-wider text-sky-900
                ">
                    Loading members...
                </p>
            ) : (
                <>
                <div className="px-5 grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:px-10 sm:gap-5">
                    {displayedMembers.map(member => (
                        <div key={member.id} className="shadow rounded-md overflow-hidden
                            hover:shadow-lg transition-shadow duration-300">
                            <img 
                                src={member.image} 
                                alt={member.description} 
                                className="w-full overflow-hidden sm:hover:scale-105 hover:brightness-75 hover:duration-1000"
                            />
                            <div className="flex flex-col items-center justify-center py-3 gap-y-2">

                                <h2 className="text-2xl font-semibold uppercase">{member.name}</h2>
                                <h2 className="text-xl text-sky-900 uppercase">{member.description}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAll && members.length > 3 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-2xl px-6 py-3 border-2 cursor-pointer font-semibold hover:bg-black hover:text-white"
                        >
                            Load More
                        </button>
                    </div>
                )}
                </>
            )}
        </div>
    )
}