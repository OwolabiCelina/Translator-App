// import { useEffect } from "react";
// import { useState } from "react"

// function App() {

//   const [queryLang, setQueryLang] = useState("en");
//   const [responseLang, setResponseLang] = useState("en");

//   const [queryText, setQueryText] = useState("");
//   const [finalUserText, setFinalUserText] = useState("")
//   const [responseText, setResponseText] = useState("");
  
//   function handleSubmit () {
//     setFinalUserText(queryText)
//   }

//   useEffect(() => {
//     async function getTranslatedText() {
//       const res = await fetch (`https://api.mymemory.translated.net/get?q=${finalUserText}&langpair=${queryLang}|${responseLang}`)
//       const data = await res.json();

//       if (finalUserText === ""){
//         setResponseText("")
//         return
//       }

//       setResponseText(data.responseData.translatedText)
//     }

//     getTranslatedText();
//   }, [finalUserText, queryLang, responseLang])

//   return (
//     <>
//       <div>
//         <div className="text-black">
//           <div className="">
//             <label className="mr-2" htmlFor="">Language you speak</label>
//             <select  className=""
//             onChange={(e) => setQueryLang(e.target.value)}
//             name="source" id="">
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="ar">Arabic</option>
//             </select>
           
//           </div>

//           <div>
//             <label className="mr-2" htmlFor="">Language you would like to translate to</label>
//             <select 
//             onChange={(e) => setResponseLang(e.target.value)}
//             name="target" id="">
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="ar">Arabic</option>
//             </select>
           
//           </div>

//         </div>

//         <div className="flex flex-col gap-2 w-[300px] m-auto">
//           <label htmlFor="">Enter your text:</label>
//           <input 
//           className="border-[2px] border-gray-700 bg-transparent w-[300px] mx-10 p-2 h-[300px] rounded-lg "
//           type="text" 
//           placeholder="Type in the text you would like to translate" id="" 
//           onChange={(e) => setQueryText(e.target.value)}
//           />
//         </div>

//         <div className="p-4 gap-2 w-[350px] m-auto">
//           <label htmlFor="">Translated word</label>
//           <div  className="border-[2px] border-gray-700 bg-transparent w-[300px] mx-10 p-2 h-[0px] rounded-lg ">{responseText}</div>
//         </div>

//         <button
//           className="rounded-md p-4 bg-blue-800"
//           onClick={handleSubmit}
//         >Translate</button>
//       </div>
//     </>
//   )
// }
// export default App

// import { useState } from "react";

// function App() {

//   const [queryLang, setQueryLang] = useState("en");
//   const [responseLang, setResponseLang] = useState("ar");

//   const [queryText, setQueryText] = useState("");
//   const [responseText, setResponseText] = useState("");

//   async function handleSubmit() {
//     try {
//       if (queryText === "") {
//         setResponseText("");
//         return;
//       }
  
//       const res = await fetch(`https://api.mymemory.translated.net/get?q=${queryText}&langpair=${queryLang}|${responseLang}`);
//       const data = await res.json();
//       console.log(data);
      
  
//       setResponseText(data.responseData.translatedText);
//     } catch (error) {
//       console.error("Error fetching translation:", error);
//     setResponseText("Translation failed. Please try again.");
//     }
//   }

//   return (
//     <>
//       <div>
//         <div className="text-black">
//           <div>
//             <label className="mr-2">Language you speak</label>
//             <select
//               onChange={(e) => setQueryLang(e.target.value)}
//               name="source"
//               id=""
//             >
//               <option value="en">English</option>
//               <option value="es-US">Spanish</option>
//               <option value="ar">Arabic</option>
//             </select>
//           </div>

//           <div>
//             <label className="mr-2">Language you would like to translate to</label>
//             <select
//               onChange={(e) => setResponseLang(e.target.value)}
//               name="target"
//               id=""
//             >
//               <option value="en-US">English</option>
//               <option value="es">Spanish</option>
//               <option value="ar">Arabic</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 w-[300px] m-auto">
//           <label>Enter your text:</label>
//           <input
//             className="border-[2px] border-gray-700 bg-transparent w-[300px] mx-10 p-2 h-[300px] rounded-lg"
//             type="text"
//             placeholder="Type in the text you would like to translate"
//             onChange={(e) => setQueryText(e.target.value)}
//           />
//         </div>

//         <div className="p-4 gap-2 w-[350px] m-auto">
//           <label>Translated word</label>
//           <div className="border-[2px] border-gray-700 bg-transparent w-[300px] mx-10 p-2 h-[0px] rounded-lg">
//             {responseText}
//           </div>
//         </div>

//         <button
//           className="rounded-md p-4 bg-blue-800"
//           onClick={handleSubmit}
//         >
//           Translate
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;


import { useState } from 'react'

function App() {
  const [queryLang, setQueryLang] = useState("en-US");
  const [responseLang, setResponseLang] = useState("es-US");
  const [isLoader, setLoader] = useState(false);

  const [queryText, setQueryText] = useState("");
  const [responseText, setResponseText] = useState("");

  function handleSubmit() {
    setLoader(true);

    async function getTranslatedText() {

      try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${queryText}&langpair=${queryLang}|${responseLang}`);
        const data = await res.json();

        setResponseText(data.responseData.translatedText);
      } catch (error) {
        console.log(error)
      } finally {
        setLoader(false)
      }
    }

    getTranslatedText();

  }

  let names = ["amal", "tobi", "jane"]

  let newArray = names.map((name) => (name + " is a girl"))
  console.log(newArray)
  // for each

  let filteredNames = names.filter((name) => (name !== "amal"))
  console.log(filteredNames)

  return (
    <>
      <div className='py-8 bg-blue-600 min-h-screen '>
        <div className='items-center bg-slate-500 p-8'>
        <div className="">
          <div className="mb-4">
            <label className='mr-4 text-xl'>Language you speak</label>
            <select className='text-black rounded-md p-2 ' name="source" id=""
              onChange={(e) => setQueryLang(e.target.value)}
            >
              <option value="en-US">English</option>
              <option value="es-US">Spanish</option>
              <option value="ar">Arabic</option>
            </select>
          </div>

          <div className="">
            <label className='mr-4 text-xl'>Language you would like to translate to</label>
            <select className='text-black rounded-md p-2'
              onChange={(e) => setResponseLang(e.target.value)}
              name="target" id="">
              <option value="es-US">Spanish</option>
              <option value="en-US">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[300px] m-auto pb-4">
          <label htmlFor="text-">Your text:</label>
          <input
            placeholder='Type in the text you would like to translate'
            className='border-[2px] border-gray-700 bg-transparent w-[300px] p-2 rounded-lg'
            type="text"
            onChange={(e) => setQueryText(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2  p-4 w-[350px] m-auto ">
          <label htmlFor="">Translated:</label>
          <div className='border-[2px] border-gray-700 bg-transparent h-[150px] p-2 rounded-lg'>{responseText}</div>
        </div>

        <button
          className='rounded-md p-4 bg-blue-800'
          onClick={handleSubmit}
        >
          {isLoader ? "Loading..." : "Translate"}
        </button>
        </div>
      </div>
    </>
  )
}

export default App
