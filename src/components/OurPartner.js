import React, { useEffect, useState } from "react";
import Img15 from "../assets/images/image15.png";
import Img16 from "../assets/images/image16.png";
import Img17 from "../assets/images/image17.png";
import Img19 from "../assets/images/image19.png";
import Img21 from "../assets/images/image21.png";
import Img22 from "../assets/images/image22.png";
import Img23 from "../assets/images/image23.png";
import Img24 from "../assets/images/image24.png";
import Img25 from "../assets/images/image25.png";
import Img26 from "../assets/images/image26.png";
import { useClientListMutation } from "../service";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../redux/clientSlice";

function OurPartner() {
  const dispatch = useDispatch()
  const clientList = useSelector((state) => state.clientState.clientList);
  const [currentPage, setCurrentPage] = useState(1);
  const [reqClientData, resClientData] = useClientListMutation();
  useEffect(() => {
    reqClientData({
      page: currentPage,
      limit: 10,
      search: '',
      status: "Active",
    });
  }, [currentPage]);
  useEffect(() => {
    if (resClientData?.isSuccess) {
      dispatch(getClient(resClientData?.data?.data?.docs));
    }
  }, [resClientData]);
  return (
    <div className="row pb-5 pt-3 " style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container pb-5">
        <div className="col-md-12">
          <h2 className="text-center  h23">Our Partners</h2>
          <div className="logo_d pt-5">
          {clientList &&
                    Array.isArray(clientList) &&
                    clientList?.length > 0 ? (
                      clientList?.map((cl, i) => {
                        return ( <div className="logo" key={i}>
              <div className="logo-inner">
              {cl?.image?.filepath && <img src={cl?.image?.filepath} alt="" className="hetchs img-responsive" />}
              </div>
            </div>)})):'No Partner Found'}
           
            {/* <div className="logo">
              <div className="logo-inner">
                <img src={Img16} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img19} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img17} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img23} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img24} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img21} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img22} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img25} alt="" className="hetchs img-responsive" />
              </div>
            </div>
            <div className="logo">
              <div className="logo-inner">
                <img src={Img26} alt="" className="hetchs img-responsive" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartner;
