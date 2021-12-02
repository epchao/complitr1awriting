import { useRef, useState } from "react";
import "../App.css";
import useWindowDimensions from "./window";

const Star = ({modalTitle, modalContent}) => {
  const [modal, isModalOpen] = useState(null);
  const { height, width } = useWindowDimensions();
  const starSize = 36;

  function handleModal() {
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10">
                  <button onClick={() => isModalOpen(null)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 96 96"
                      enableBackground="new 0 0 96 96"
                      className="h-4 w-4"
                    >
                      {" "}
                      <polygon
                        fill="black"
                        points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "
                      />{" "}
                    </svg>
                  </button>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    {modalTitle}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-wrap">
                        {modalContent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const StarStyles = useRef({
      top: `${(Math.floor(Math.random() * (height - starSize)) / height) * 100}%`,
      left: `${(Math.floor(Math.random() * (width - starSize)) / width) * 100}%`,
  })

  return (
    <div>
      {modal}
      <button
        className={`star fixed m-auto text-3xl text-yellow-200`}
        onClick={() => isModalOpen(handleModal())}
        style={StarStyles.current}
      >
        &#9733;
      </button>
    </div>
  );
};

export default Star;
