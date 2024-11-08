import React from "react";
import "../App.css";
import { PiFiles } from "react-icons/pi";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Cart = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference}  className="cart_container">
      <div className="cart">
        <PiFiles fontSize="1.5rem" />
        <p>{data.des}</p>
        <div className="spans">
          <span>{data.filesize}</span>
          <span>
            {data.close ? (
              <MdDownloadForOffline fontSize="1.5rem" />
            ) : (
              <IoCloseCircleOutline fontSize="1.5rem"/>
            )}
          </span>
        </div>
      </div>

      {data.tag.isOpen && (
        <div className="footer">
          <p>{data.tag.tagTitle}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
