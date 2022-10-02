export { }

declare global {
  
  type ResizeState = 'cover' | 'contain';

  type ErrorAction = 'none' | 'network' | 'unknown';

  type CatImage = {
    url: string,
  }

  type RootScreenProps = {
    Home: undefined;
    About: undefined;
  }
}