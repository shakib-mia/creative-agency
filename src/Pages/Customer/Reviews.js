import React from "react";

const Reviews = () => {
  const reviewSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="reviews">
      <div className="bg-white d-flex justify-content-between align-items-center px-5">
        <h3 className="fw-bolder py-3">Reviews</h3>
        <h5 className="fw-bolder py-3">User Name</h5>
      </div>

      <div className="px-5 pt-5">
        <form className="mt-5 col-12 col-lg-6" onSubmit={reviewSubmit}>
          <input
            type="text"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Your Name "
          />
          <input
            type="email"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Company Name"
          />

          <textarea
            rows="3"
            className="form-control rounded-0 p-3 my-3 border-0"
            placeholder="Description"
          ></textarea>

          <div className="row row-cols-4">
            <div className="col">
              <button className="w-100 btn btn-dark py-2 rounded-1">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
