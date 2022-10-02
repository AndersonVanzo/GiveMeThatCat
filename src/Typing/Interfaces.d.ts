export { }

declare global {

  interface GetImageResponse {
    image: CatImage,
    error?: ErrorAction,
  }
}