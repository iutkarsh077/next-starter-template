const TailwindLearn = () => {
  return (
    <>
      <div className="flex w-full justify-center h-[100vh] items-center  bg-[url(https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-contain bg-no-repeat hover:contrast-150 ease-in-out transition-all duration-300">
        <div className="h-[200px] w-[200px] shadow-2xl shadow-orange-800 rounded-md brightnessover:animate-bounce transition-all duration-300 ease-in-out bg-linear-to-r/hsl from-indigo-500 to-teal-400 flex items-center justify-center text-xl text-white  font-medium text-shadow-lg hover:opacity-50 hover:scale-x-125 hover:animate-bounce">
          Utkarsh
        </div>
      </div>
      <table>
        <thead>
          <caption className="caption-top">
            Table 3.1: Professional wrestlers and their signature moves.
          </caption>
          <tr className="border-2 border-blue-700">
            <th>First</th>
            <th>second</th>
            <th>third</th>
          </tr>
        </thead>
        <tbody className="border-spacing-40">
          <tr className="space-x-10 border-2 border-red-500">
            <td className="border-yellow-600 border-2">Body 1</td>
            <td>Body 2</td>
            <td>Body 3</td>
          </tr>
          <tr className="space-x-10 border-2 border-green-500">
            <td>Body 1</td>
            <td>Body 2</td>
            <td>Body 3</td>
          </tr>
        </tbody>
      </table>

      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full flex justify-center flex-col gap-10 items-center">
        <button className="bg-blue-500 text-white hover:translate-y-2.5 px-5 py-2 rounded-md hover:cursor-pointer hover:bg-indigo-500 font-medium  transition-all duration-200 ease-in-out hover:scale-110 ">
          Save Changes
        </button>

        <div className="bg-blue-500 text-white hover:translate-y-2.5  rounded-full hover:cursor-pointer hover:bg-indigo-500 font-medium  transition-all animate-ping duration-200 ease-in-out hover:scale-110 h-10 w-10"></div>
        <div className="flex justify-center items-center gap-x-2">
          <input type="checkbox" className="accent-amber-400" checked />
          Allow Notification
        </div>

        <div>
          <select className="appearance-none bg-gray-800 text-white px-5 py-2 border-2 border-purple-500 ">
            <option value="utkarsh">Utkarsh</option>
            <option value="rohan">Rohan</option>
            <option value="john">John</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TailwindLearn;
