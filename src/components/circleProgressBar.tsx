export function ProgressBar(){
    return(
        <>
            <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                            
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" stroke-width="8"/>
                            
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" 
                            stroke-width="8" stroke-linecap="round"
                            stroke-dasharray="283" stroke-dashoffset="70"
                            transform="rotate(-90 50 50)"/>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#6366f1"/>
                        <stop offset="100%" stop-color="#8b5cf6"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-gray-800">1,850</span>
                        <span className="text-gray-500">kcal</span>
                </div>
            </div>
        </>
    )
}