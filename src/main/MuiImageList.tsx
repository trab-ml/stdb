import React from "react";
import { ImageList, ImageListItem, Button} from "@mui/material";
import { imagesData } from "../ressources/img";

interface RenderImageListItemProps {
  img: string,
  title: string, 
};
 
const MuiImageList = () => {
  const renderImageListItem = ({img, title} : RenderImageListItemProps) => (
    <ImageListItem key={img} >
      <img 
        src={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
        alt={title} 
        // loading='lazy'
        className="muiImageList-img"
      />
    </ImageListItem>
  );

  return (
    <div className='mui-img-list-box' >
      <ImageList sx={{ width: '90%', height: 545}} variant="woven" cols={3} gap={8} >
        {imagesData.map(renderImageListItem)}
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