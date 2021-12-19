import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions/data";

const BookModal = ({ ...arg }) => {
  const { setOpen, setOpen3, setPrice, setSelectedItem } = arg;
  const dispatch = useDispatch();
  const all_data = useSelector((state) => state.data.data);
  const bookedItems = React.useMemo(
    () => JSON.parse(localStorage.getItem("bookedItems")) || [],
    []
  );
  const availableProduct = React.useMemo(
    () =>
      all_data.filter(
        (item) =>
          !bookedItems.find(
            (bookedItem) => bookedItem.selectedData.name === item.name
          )
      ),
    [all_data, bookedItems]
  );

  const [selectedValue, setSelectedValue] = useState(availableProduct[0]?.name);
  const selectedData = all_data?.find((x) => x.name === selectedValue);

  //DATEPICKER STATE
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState();

  // console.log('date',isNaN(date))
  //CALCULATE DAYS
  const getNumberOfDays = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    //save date
    setDate(diffInDays);
    return diffInDays;
  };
  useEffect(() => {
    getNumberOfDays(from, to);
  }, [from, to]);

  const setFromDate = (e) => {
    setFrom(e.target.value);
  };
  const setToDate = (e) => {
    setTo(e.target.value);
  };
  //CHECK THE VALIDITY OF BOOK A PRODUCT
  let validity;
  if (date >= selectedData?.minimum_rent_period) {
    validity = true;
  } else {
    validity = false;
  }

  const combineFunction = () => {
    const allItems = JSON.parse(localStorage.getItem("apiData"));
    const selectedData = allItems?.find((x) => x.name === selectedValue);

    const updatedItem = [
      {
        ...selectedData,
        availability: false,
      },
      ...allItems.filter((item) => item.name !== selectedData?.name),
    ];
    localStorage.setItem("apiData", JSON.stringify(updatedItem));
    dispatch(getData());
    const selectedObj = {
      selectedData,
      to,
      from,
    };
    const estimate_price = date * selectedData?.price;
    setPrice(estimate_price);
    setSelectedItem(selectedObj);
    setOpen(false);
  };
  const closeModal = () => {
    setOpen3(false);
    setOpen(false);
  };
  return (
    <div className="BookModal_wrapper">
      <h1>Book a product</h1>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        <option value="DEFAULT" disabled hidden>
          {selectedValue}
        </option>{" "}
        {availableProduct?.map((x, i) => {
          return (
            <option value={x.name} key={i}>
              {x.name}
            </option>
          );
        })}
      </select>
      <div className="selectedItem_details">
        <p>Name: {selectedData?.name}</p>
        <p>Rental: {selectedData?.minimum_rent_period}</p>
        <p>
          Milleage:{" "}
          {selectedData?.mileage === null ? "N/A" : selectedData?.mileage}
        </p>
        <p>
          Repair Needed:{" "}
          {selectedData?.needing_repair === false ? "false" : "true"}
        </p>
      </div>
      <div className="dates">
        <label htmlFor="From">From {""}</label>
        <input type="date" value={from} onChange={(e) => setFromDate(e)} />
        <label htmlFor="To">To {""}</label>
        <input type="date" value={to} onChange={(e) => setToDate(e)} />
      </div>
      {/* error msg if not validate compare to minimum rental days */}
      <span className="err_msg">
        {isNaN(date) === false
          ? validity === true
            ? ""
            : `The rental period needs to be at least ${selectedData?.minimum_rent_period} day`
          : ""}
      </span>
      <div className="exit_buttons">
        <button
          className={
            isNaN(date) === true || validity === false
              ? "not_validate"
              : "yes_btn"
          }
          onClick={combineFunction}
          disabled={isNaN(date) === true || validity === false}
        >
          Yes
        </button>
        <button className="no_btn" onClick={closeModal}>
          No
        </button>
      </div>
    </div>
  );
};

export default BookModal;
