export function App (){
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <>
    <div className = "flex justify-center h-full">
      <div className = "border flex flex-col justify-center max-w-3/4 items-center w-full h-full">
        <h1 className="text-4xl py-4">MacroTracker</h1>
        <form className = "flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label htmlFor = "meal">
            Meal: 
            <input type = "text" placeholder="Food" />
          </label>
          <label htmlFor = "calories">
            Calories: 
            <input type = "number" placeholder="Calories in grams"/>
          </label>
          <label htmlFor = "protein">
            Protein:
            <input type = "text" placeholder="Protein in grams" />
          </label>
          <label htmlFor = "fat">
            Fat: 
            <input type = "text" placeholder="Fat in grams" />
          </label>
          <label htmlFor = "carbs">
            Carbs: 
            <input type = "text" placeholder="Carbs in grams" />
          </label>
          <button className = "bg-blue-400 rounded-2xl py-4 cursor-pointer text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}