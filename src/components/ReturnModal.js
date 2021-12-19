import React, { useState } from "react";
import differenceInDays from "date-fns/differenceInDays";
import { getData } from "../redux/actions/data";
import { useDispatch } from "react-redux";

const ReturnModal = ({ setOpen2, setOpen4 }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [mileage, setMileage] = useState("");
  const [selectedValue, setSelectedValue] = useState("select");
  const selectedData = data?.find((x) => x.selectedData.name === selectedValue);

  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem("bookedItems")));
  }, []);

  const closeModal = () => {
    setOpen4(false);
    setOpen2(false);
  };

  const removeBooked = () => {
    const stilBookedItems = data?.filter(
      (item) => item.selectedData.name !== selectedValue
    );
    localStorage.setItem("bookedItems", JSON.stringify(stilBookedItems));
    const allItems = JSON.parse(localStorage.getItem("apiData"));
    const dateDifference = differenceInDays(
      new Date(selectedData?.to),
      new Date(selectedData?.from)
    );
    const totalMileage =
      selectedData?.selectedData?.millage ||
      0 + dateDifference * 10 + Number(mileage);

    const totalDurability =
      selectedData?.selectedData?.type === "meter"
        ? selectedData?.selectedData?.durability - dateDifference * 2
        : selectedData?.selectedData?.durability - dateDifference * 1;

    const updatedItem = [
      {
        ...selectedData.selectedData,
        mileage: totalMileage,
        durability: totalDurability,
      },
      ...allItems.filter(
        (item) => item.name !== selectedData?.selectedData?.name
      ),
    ];
    localStorage.setItem("apiData", JSON.stringify(updatedItem));
    dispatch(getData());
    setOpen4(false);
    setOpen2(false);
  };

  return (
    <div>
      <div className="BookModal_wrapper">
        <h1>Return a product</h1>
        {(data || []).length ? (
          <>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
            >
              <option value="DEFAULT" disabled hidden>
                {selectedValue}
              </option>{" "}
              {data?.map((x, i) => {
                return (
                  <option value={x.selectedData.name} key={i}>
                    {x.selectedData.name}
                  </option>
                );
              })}
            </select>
            <div className="selectedItem_details">
              {selectedValue !== "select" && (
                <>
                  <p>Name: {selectedData?.selectedData?.name}</p>
                  <p>
                    Rental: {selectedData?.selectedData?.minimum_rent_period}
                  </p>
                  <p>
                    Milleage:{" "}
                    {selectedData?.selectedData?.mileage === null
                      ? "N/A"
                      : selectedData?.selectedData?.mileage}
                  </p>
                  <p>
                    Repair Needed:{" "}
                    {selectedData?.selectedData?.needing_repair === false
                      ? "No"
                      : "Yes"}
                  </p>
                </>
              )}
            </div>
            <div className="mileageCount">
              <input
                type="number"
                name="mileage"
                value={mileage}
                placeholder="used mileage"
                onChange={(e) => setMileage(e.target.value)}
              />
            </div>
            <div className="exit_buttons">
              <button
                className={!mileage ? "not_validate" : "yes_btn"}
                onClick={removeBooked}
                disabled={!mileage}
              >
                Yes
              </button>
              <button className="no_btn" onClick={closeModal}>
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="not_available">No booked product to return!</p>{" "}
            <button className="close_btn" onClick={closeModal}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReturnModal;
