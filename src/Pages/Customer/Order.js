import React from "react";

const Order = () => {
  const uploadFile = (e) => {
    e.preventDefault();
    document.getElementById("uploadFile").click();
  };

  const handleChange = (e) => {
    document.getElementById("uploadBtn").innerText = e.name;
  };

  return (
    <div id="order">
      <div className="bg-white d-flex justify-content-between align-items-center px-5">
        <h3 className="fw-bolder py-3">Order</h3>
        <h5 className="fw-bolder py-3">User Name</h5>
      </div>

      <div className="px-5 pt-5">
        <form className="mt-5 col-12 col-lg-6">
          <input
            type="text"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Your Name / Company Name"
          />
          <input
            type="email"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Your Email Address"
          />
          <input
            type="text"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Graphic Design"
          />

          <textarea
            rows="3"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Project Details"
          ></textarea>

          <div className="row row-cols-1 row-cols-md-2 pb-3 pb-lg-0 align-items-center">
            <div className="col">
              <input
                type="text"
                className="form-control rounded-0 p-3 my-3 border-0"
                placeholder="Price"
              />
            </div>
            <div className="col">
              <button
                className="btn w-100 p-3 fw-bold"
                id="uploadBtn"
                onClick={uploadFile}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cloud-upload me-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>
                Upload Project Files
              </button>

              <input
                type="file"
                id="uploadFile"
                className="d-none"
                onChange={(e) => handleChange(e.target.files[0])}
              />
            </div>
          </div>
          <div className="row row-cols-4">
            <div className="col">
              <button className="w-100 btn btn-dark py-2 rounded-1">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
