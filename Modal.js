import React from 'react';

const Modal = ({ message, onClose }) => {
  const isSuccess = message === 'Login successful';

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
              {isSuccess ? (
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {message}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {isSuccess ? 'You have successfully logged in!' : 'Please check your username and password and try again.'}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
