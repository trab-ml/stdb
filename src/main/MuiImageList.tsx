import React from "react";
import { ImageList, ImageListItem, Button} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { imagesData } from "../resources/img";

type RenderImageListItemProps =  {
  imgSrc: string,
  title: string, 
};
  
const MuiImageList = () => {
  // console.log(imagesData);
  const renderImageListItem = ({imgSrc, title} : RenderImageListItemProps) => (
    <ImageListItem key={uuidv4()}>
      <img 
        // src={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
        src={imgSrc} 
        alt={title} 
        loading='lazy'
        className="muiImageList-img"
        width={164}
        height={164}
      />
    </ImageListItem>
  );

  return (
    <div className='mui-img-list-box' >
      <ImageList sx={{ width: '90%', height: 545 }} variant="woven" cols={3} gap={8}>
        {imagesData.map((item) => renderImageListItem({ imgSrc: item.img, title: item.title }))}
      </ImageList>

      <Button 
        variant="contained" 
        size="medium" 
        id="mui-img-list-box-btn"
        className="mui-img-list-box-btn"
      >
        join today
      </Button>
    </div>
  );
}; 

export default MuiImageList;