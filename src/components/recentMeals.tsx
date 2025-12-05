export function RecentMeals({ meal }: { meal: any[] }) {

    return (
        <>
            <div className="space-y-3">
                    {meal.map((meals:any)=>{
                    return(
                        
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-medium">{meals.name}</h3>
                                <span className="text-sm text-gray-500">
                                    {new Date(meals.date).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Calories:</span>
                                <span className="font-medium">{meals.calories} kcal</span>
                            </div>
                            <div className="flex space-x-2 text-xs">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">P: {meals.protein}g</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">F: {meals.fat}g</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">C: {meals.carbs}g</span>

                            </div>
                        </div>
                    )})}
            </div>
        </>
    )
}