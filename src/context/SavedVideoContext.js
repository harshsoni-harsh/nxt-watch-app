import { createContext } from "react";

const SavedVideoContext = createContext({
  savedVideos: [],
  onSave: () => {},
  removeSave: () => {},
});

export default SavedVideoContext;
