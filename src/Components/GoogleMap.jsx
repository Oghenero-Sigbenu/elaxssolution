import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-[100%] ">
      <div className="w-[100%]">
        <div className="w-[100%]">
          <iframe
            // eslint-disable-next-line
            className="w-[100%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92043.94111228843!2d-79.1111702622965!3d43.86881954647303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4e7b441ad15d1%3A0xfb77e101d380bece!2sAjax%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1701676042808!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            title="Map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default GoogleMap;
