export function Dashboard() {
    return (
        <>
        <div className = "bg-gray-50 min-h-screen">
            <div className = "mx-auto px-4 py-8 max-w-md">
                <section className = "not-even:mb-8">
                    <h1 className="text-2xl font-bold tex-gray-800 mb-6">Today's Nutrition</h1>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <div className="font-semibold mb-1">Protein:</div>
                            <div className="text-2xl font-bold text-gray-800">145g</div>
                            <div className="text-xs text-gray-500">58% of goal</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <div className="text-primary-500 font-semibold mb-1">Carbs</div>
                            <div className="text-2xl font-bold text-gray-800">210g</div>
                            <div className="text-xs text-gray-500">75% of goal</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <div className="text-primary-500 font-semibold mb-1">Fat</div>
                            <div className="text-2xl font-bold text-gray-800">65g</div>
                            <div className="text-xs text-gray-500">72% of goal</div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-gray-800">Daily Goal</h3>
                                <p className="text-sm text-gray-500">2,400 kcal</p>
                            </div>
                            <div className="text-primary-500 font-bold">
                                77%
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-linear-to-r from-primary-500 to-secondary-500 h-2 rounded-full"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}