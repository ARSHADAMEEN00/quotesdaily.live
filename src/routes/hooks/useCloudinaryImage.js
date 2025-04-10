const useResource = (imgUrl, styles) => {
  const imgUrlArray = imgUrl?.split('image/');
  const modifiedUrl =
    imgUrlArray?.length >= 1 && `${imgUrlArray[0]}image/${styles}/${imgUrlArray[1]}`;

  return modifiedUrl;
};

export default useResource;
