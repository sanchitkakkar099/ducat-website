import DOMPurify from "dompurify";
import React, { Fragment } from "react";
import { useFetchAboutUsQuery } from "../service";

function Abouts() {
  const resFetchAboutUs = useFetchAboutUsQuery();
  return (
    <div className="row pb-3 py-5">
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
  );
}

export default Abouts;
