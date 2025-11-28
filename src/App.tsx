import {useState} from 'react'

export function App (){
  const [test, setTest]=useState('');

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/', {
      method: "GET",
    });
    const data = await res.json();
    setTest(JSON.stringify(data, null, 2));

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
            <input type = "number" placeholder="Protein in grams" />
          </label>
          <label htmlFor = "fat">
            Fat: 
            <input type = "number" placeholder="Fat in grams" />
          </label>
          <label htmlFor = "carbs">
            Carbs: 
            <input type = "number" placeholder="Carbs in grams" />
          </label>
          <button className = "bg-blue-400 rounded-2xl py-4 cursor-pointer text-white">
            Submit
          </button>
        </form>
        <pre>{test}</pre>
      </div>
    </div>
    </>
  )
}