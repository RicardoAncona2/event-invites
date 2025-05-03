import { Box } from "@mui/material"
import Image from "next/image";
import { SetStateAction } from "react";
type props = {
  index: number, handler: (value: SetStateAction<number | null>) => void, photo: {
    src: string;
    alt: string;
  }
}
const GalleryItem = ({ index, handler, photo }: props) => {
  return (<Box key={index} onClick={() => handler(index)}>
    <Image
      src={photo.src}
      alt={photo.alt}
      width={400}
      height={600}
      style={{
        objectFit: "cover",
        cursor: "pointer",
      }}
    />

  </Box>)
}
export default GalleryItem