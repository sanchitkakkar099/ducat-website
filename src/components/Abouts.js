import DOMPurify from "dompurify";
import React, { Fragment } from "react";
import { useFetchAboutUsQuery } from "../service";
import AboutImg from '../assets/images/about.png'

function Abouts() {
  const resFetchAboutUs = useFetchAboutUsQuery();
  return (
    <>
    <div class="about_banner">
        <img src={AboutImg} class="w-100" width="auto" height="auto" alt=""/>
        <div class="about_content">
            <h1 class="about_heading">Our #1 Highest Priority is on <br/>Building Your Job- oriented Skills</h1>
        </div>
   </div>
   <div className="our_mission">
        <div className="container">
        <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(resFetchAboutUs?.data?.data?.aboutus_content || '' , {
                      ADD_TAGS: ["iframe"], //or ALLOWED_TAGS
                      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],//or //or ALLOWED_ATR
                      RETURN_TRUSTED_TYPE: true
                    }),
                  }}
                />
      </div>
    </div>
    </>
  );
}

export default Abouts;
