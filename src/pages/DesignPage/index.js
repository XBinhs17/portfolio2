import classNames from "classnames/bind";
import Masonry from "react-masonry-css";
import Modal from "react-modal";

import styles from "./DesignPage.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const images = [
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741936276/flyer_ts2_wmj5jk.png",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741936544/LichNghiTet_im5qxp.png",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741936788/main_poster_7_bc1m2e.png",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741936914/NhanJob_sgpshl.png",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741936964/Banner_3_gkjhjc.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741936961/Banner_1_u33yhz.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741937294/Banner_SanPham_tzgdcj.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741937510/post3_mskgc1.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741937638/Banner_1_drrpkc.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741937639/Banner_2_zcgcxt.jpg",
];

const breakpointColumns = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

Modal.setAppElement("#root");

function DesignPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>My Drawings</h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className={cx("masonry-grid")}
        columnClassName={cx("masonry-grid_column")}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={cx("grid-item")}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Drawing ${index}`} />
          </div>
        ))}
      </Masonry>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        className={cx("modal")}
        overlayClassName={cx("overlay")}
      >
        <button
          className={cx("close-btn")}
          onClick={() => setSelectedImage(null)}
        >
          ✖
        </button>
        <img
          src={selectedImage}
          alt="Zoomed Drawing"
          className={cx("modal-img")}
        />
      </Modal>
    </div>
  );
}

export default DesignPage;
