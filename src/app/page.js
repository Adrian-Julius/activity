"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // 1. Create a counter app (Same as activity in worksheet)
  // 2. Explain what's happening
  //     1. Increment by plus 1
  //     2. Decrement by minus 1
  //     3. Reset to 0

  // Section 2:
  // Once above is complete:
  // 1. Modify the counter app
  //     1. You may change initial state in this section
  //     2. Increment by times 2
  //     3. Decrement by divided by 2
  //     4. Reset to 1

  // Section 3:
  // Add Supabase auth
  // 1. Create log in page
  // 2. Access counter app only when logged in
  // 3. Redirect to login page if not user

  // Section 4:
  // Deploy to Vercel
  const [count, setCount] = useState(1);

  const [isLogin, setIsLogin] = useState(false);



  return (
    // <div className="text-center">
    //   <h1>{count}</h1>
    //   <button
    //     onClick={() => setCount(count - 1)}
    //     className="p-3 m-5 bg-slate-200"
    //   >
    //     DECREMENT(-1)
    //   </button>
    //   <button onClick={() => setCount(0)} className="p-3 m-5 bg-slate-200">
    //     RESET (0)
    //   </button>
    //   <button
    //     onClick={() => setCount(count + 1)}
    //     className="p-3 m-5 bg-slate-200"
    //   >
    //     INCREMENT (+1)
    //   </button>
    // </div>

      // <div className="text-center">
      //   <h1>{count}</h1>
      //   <button
      //     onClick={() => setCount(count / 2)}
      //     className="p-3 m-5 bg-slate-200"
      //   >
      //     DECREMENT(-1)
      //   </button>
      //   <button onClick={() => setCount(1)} className="p-3 m-5 bg-slate-200">
      //     RESET (1)
      //   </button>
      //   <button
      //     onClick={() => setCount(count * 2)}
      //     className="p-3 m-5 bg-slate-200"
      //   >
      //     INCREMENT (+1)
      //   </button>
      // </div>
    
    <div>
      h1
    </div>
  );
}
