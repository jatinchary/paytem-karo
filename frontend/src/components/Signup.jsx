// import React from 'react'

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white shadow-lg">
    <div className="mb-8 text-center">
      <h1 className="my-3 text-4xl font-bold">Sign up</h1>
      <p className="text-sm text-gray-600">Sign up to access your account</p>
    </div>
    <form noValidate="" action="" className="space-y-12">
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
          <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-indigo-600">Forgot password?</a>
          </div>
          <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign in</button>
        </div>
        <p className="px-6 text-sm text-center text-gray-600">
          Don't have an account yet?
          <a rel="noopener noreferrer" href="/signin" className="hover:underline text-indigo-600 ml-1">Sign in</a>.
        </p>
      </div>
    </form>
  </div>
</div>

  )
}

export default Signup