import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Gallery from '../Gallery/Gallery';

export default function ImagePagination() {
  const {images} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getImages = async () => {
      try {
        const {data} = await imagesApi.getImages(user.token!);
        dispatch(imagesSlice.actions.setImages(data));
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  });

  return <Gallery hasSidebar={true} images={images.data} isAdmin={isAdmin(user?.role!)} />;
}
