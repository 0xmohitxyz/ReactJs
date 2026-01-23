import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(45deg,#000428,#004e92,#000428)] bg-[length:600%_600%] animate-gradient px-4">
      <div className="w-full max-w-[600px] text-center text-[#fafafa] border-2 border-[#fafafa] rounded-lg p-5">
        <h1 className="text-[150px] max-[500px]:text-[100px] font-bold">404</h1>

        <h2 className="text-2xl max-[500px]:text-xl">
          Oops, Page not found!
        </h2>

        <p className="my-4 max-[500px]:text-[14.5px]">
          The Page, that you're looking for is not found (it maybe moved, deleted
          or even doesn't exist). Sorry for the Inconvenience.
        </p>

        <p className="my-4 max-[500px]:text-[14.5px]">
          If you think this is an error or something is broken, click report
        </p>

        <div className="flex gap-2 justify-center max-[500px]:flex-col">
          <button className="px-4 py-2 border-2 border-[#fafafa] rounded-lg text-[#fafafa] transition hover:bg-[#fafafa] hover:text-[#000428] bg-[#fafafa] text-[#000428] hover:bg-[#ccc] hover:border-[#ccc]">
            Go back
          </button>

          <button className="px-4 py-2 border-2 border-[#fafafa] rounded-lg text-[#fafafa] transition hover:bg-[#fafafa] hover:text-[#000428]">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound