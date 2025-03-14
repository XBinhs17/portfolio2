import classNames from "classnames/bind";
import Masonry from "react-masonry-css";
import Modal from "react-modal";

import styles from "./DesignPage.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const images = [
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472267073_e41da779ea8346afa6f413c4f64f89f8_ky4ykb.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472246161_f82ef7b84eb4aa0da790574dd5f00260_q7alpn.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472243438_e5ddb8a0a23bdb02855e852064cc1eb3_baadsh.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472254889_e774154aa5cd8933b5cf5120cf92f22f_jirch6.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472242006_c0974a8da6d62cffb6e0a7841cfd6d90_hhjidz.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472226901_3e593ef18f3a0195dfc319a18de7d635_zkreug.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934548/z6405472232054_a9a5f5664492355f3581be68ac65459a_lr9tst.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934547/z6405472221944_c01661900e7951cc81dcaabe2e8ddc0f_tirvln.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934547/z6405472211867_3ec7617a72ab5f25698e3f121448a718_gigflj.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934547/z6405472185880_81d87582c3853d0cff074a39d0b150f9_fhj9ou.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934547/z6405472207675_9b9efc96320024bf3c539115c8bddffd_rnhr2b.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934547/z6405472203361_a19193655f6ad74184b9d7f0e255b405_agvomb.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934547/z6405472197916_f94397ecdf231ddb46fa08c7ea69100b_em0efk.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934546/z6405472178545_41701ac326aaee72f0a3b00221dbf206_cu2007.jpg",
  "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934546/z6405472179546_ee8987de6f58ace4dfd1d4fc7f8fce22_otzw6n.jpg",
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
          <div key={index} className={cx("grid-item")} onClick={() => setSelectedImage(img)}>
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
