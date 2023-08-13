import archiveComponent from "./components/archiveComponent";
import imagecomponent from "./components/imagecomponent";
import linkcomponent from "./components/linkcomponent";
import listcomponent from "./components/listcomponent";
import personComponent from "./components/personComponent";
import richtextcomponent from "./components/richtextcomponent";
import textcomponent from "./components/textcomponent";
import titletextcomponent from "./components/titletextcomponent";
import pages from "./pages";
import sections from "./sections";

export const schemaTypes = [
  pages,
  sections,
  titletextcomponent,
  textcomponent,
  richtextcomponent,
  imagecomponent,
  linkcomponent,
  listcomponent,
  personComponent,
  archiveComponent,
];
