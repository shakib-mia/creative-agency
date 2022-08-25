import React from "react";

const AdminAddService = () => {
  const handleChange = (e) => {
    document.getElementById("uploadBtn").innerText = e.name;
  };

  return (
    <div>
      <div className="bg-white d-flex justify-content-between align-items-center px-5">
        <h3 className="fw-bolder py-3">Add Service</h3>
        <h5 className="fw-bolder py-3">Admin Name</h5>
      </div>

      <div className="my-5 mx-3 p-5 rounded-3">
        <form className="bg-white p-5 row row-cols-2 me-1 rounded-2" action="">
          <div>
            <label htmlFor="service-title" className="mb-2">
              Service Title
            </label>
            <input
              type="text"
              className="form-control rounded-1"
              id="service-title"
              placeholder="Enter Title"
            />

            <label htmlFor="description" className="mt-4 mb-2">
              Description
            </label>
            <textarea
              rows={3}
              type="text"
              className="form-control rounded-1"
              id="description"
              placeholder="Description"
            />
          </div>

          <div>
            <h6 className="fw-bold">Icon</h6>

            <div className="col">
              <label
                htmlFor="uploadFile"
                className="btn mt-1 px-4 fw-bold"
                id="uploadBtn"
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
                Upload Image
              </label>

              <input
                type="file"
                id="uploadFile"
                className="d-none"
                onChange={(e) => handleChange(e.target.files[0])}
              />
            </div>
          </div>
        </form>

        <div className="text-end pt-3 me-1">
          <a href="#" className="btn btn-success text-white py-2 px-4">
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminAddService;
