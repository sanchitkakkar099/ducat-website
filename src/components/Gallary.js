import React, { useEffect } from "react";
import Frame2 from "../assets/images/Frame2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useGalleryListMutation } from "../service";
import { getGallary } from "../redux/gallarySlice";

function Gallary() {
  const dispatch = useDispatch();
  const gallaryList = useSelector((state) => state.gallaryState.gallaryList);
  const [reqGallaryData, resGallaryData] = useGalleryListMutation();
  useEffect(() => {
    reqGallaryData({
      page: 1,
      limit: 10,
      search: "",
      status: "",
    });
  }, []);

  useEffect(() => {
    if (resGallaryData?.isSuccess) {
      dispatch(getGallary(resGallaryData?.data?.data?.docs));
    }
  }, [resGallaryData]);
  return (
    <>
      <div className=" d-flex flex-row  py-4 about-container">
        {/* <img
          className="icon mt-2"
          src={Frame2}
          style={{ width: "35px", height: "35px" }}
        />
        <h2 className="px-3 about">Gallary</h2> */}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 mx-3">
        {gallaryList && Array.isArray(gallaryList) && gallaryList?.length > 0
          ? gallaryList?.map((cl, i) => {
              return (
                <div className="col" key={i}>
                  <div className="card h-100 bg-secondary">
                    {
                        cl?.image?.filepath && (
                          <img
                            src={cl?.image?.filepath}
                            height={50}
                            width={50}
                            alt="image"
                            className="card-img-top"
                          />
                        )
                      }
                    <div className="card-body">
                      <h5 className="card-title">{cl?.name}</h5>
                      <p className="card-text">{cl?.remark}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}

        {/* <div className="col">
          <div className="card h-100 bg-secondary">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-secondary">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Gallary;
