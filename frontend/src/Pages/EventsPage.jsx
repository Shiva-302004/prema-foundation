import Mihtila from "../assets/images/mithila.png"
const EventsPage = () => {
    const events = {
        upcoming: [
            {
                id: 1,
                image: Mihtila,
                title: "Workshop on Mithila Painting",
                date: "1st-28th Feb,2025",
                venue: "NIT Patna",
                department: "Maa Prema Foundation"
            },
            // Add more upcoming events
        ],
        past: [
            // Add past events
        ]
    };

    return (
        <div className="py-16 px-10 md:px-4 mt-30">
            <div className="max-w-7xl mx-auto">
                {/* Upcoming Events */}
                <div className="mb-16">
                    <h1 className="text-5xl text-center font-bold text-[#1e3a8a] mb-8">
                        Events
                    </h1>
                    <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
                        Upcoming Events<span className="text-orange-500">.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.upcoming.map((event) => (
                            <div 
                                key={event.id}
                                className="bg-gray-200 p-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <img 
                                    src={event.image} 
                                    alt={event.title}
                                    className="w-full h-[200px] object-cover rounded-2xl"
                                />
                                <div className="p-6">
                                    <div className="text-sm text-orange-500 mb-1">{event.department}</div>
                                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-1">
                                        {event.title}
                                    </h3>
                                    <div className=" text-gray-600 text-sm">
                                        <div>
                                            <span className="font-semibold">Date: </span>
                                            {event.date}
                                        </div>
                                        <div>
                                            <span className="font-semibold">Venue: </span>
                                            {event.venue}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Events */}
             {events.past.length > 0 && <div>
                    <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">
                        Past Events<span className="text-orange-500">.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.past.map((event) => (
                            <div 
                                key={event.id}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {/* Same card structure as above */}
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default EventsPage; 