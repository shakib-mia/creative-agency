import React, { useState } from "react";

const ServiceItem = () => {
  const [options, setOptions] = useState(0);
  return (
    <div className="row row-cols-5 justify-content-between p-3 rounded-3 fw-normal fw-bold">
      <div>Sufi Ahmed Hamim</div>
      <div>sufi@gmail.com</div>
      <div>Graphic Design</div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, nulla.
      </div>
      <div>
        <select
          id="select"
          onChange={(e) => {
            setOptions(e.target.options.selectedIndex);
            console.log(e);
          }}
          className={
            options === 0
              ? "text-success border-0"
              : options === 1
              ? "text-warning border-0"
              : "text-danger border-0"
          }
        >
          <option class="text-success" value="apple">
            Done
          </option>
          <option class="text-warning" value="banana">
            Ongoing
          </option>
          <option class="text-danger" value="grape">
            Pending
          </option>
        </select>
      </div>
    </div>
  );
};

export default ServiceItem;
