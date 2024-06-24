import { useDispatch, useSelector } from "react-redux"
import { decreament, increament } from "./redux/features/counterSlice";


function App() {
 
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
  <div className="h-screen w-full flex justify-center items-center">
    <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10 ">
      <button 
      onClick={()=>dispatch(increament())}
      className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">Increment</button>
      <h1 className="text-3xl mx-10">{count}</h1>
      <button 
        onClick={()=>dispatch(decreament())}
         className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">Decrement</button>
    </div>
  </div>
  )
}

export default App
