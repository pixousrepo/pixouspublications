import InformationSection from "../components/authors-information/InformationSection.astro";
import PortableTextHomeWrapper from "../components/homepage/PortableTextHomeWrapper.astro";
import CurrentIssues from "../components/homepage/CurrentIssues.astro";
import Herosection from "../components/homepage/Herosection.astro";
import PeerReviewStatus from "../components/peer-review-policy/PeerReviewStatus.astro";
import PortableTextWrapper from "../components/peer-review-policy/PortableTextWrapper.astro";
import TeamSection from "../components/EditorialBoard/TeamSection.astro";
import ArchivesWrapper from "../components/archives/ArchivesWrapper.astro";
import SubmitWrapper from "../components/submit-paper/SubmitWrapper.astro";

export const getComponent = (slug) => {
  switch (slug) {
    case "hero-section":
      return Herosection;
    case "current-issue":
      return CurrentIssues;
    case "aim-and-scope":
      return PortableTextHomeWrapper;
    case "open-access-statement":
      return PortableTextHomeWrapper;
    case "peer-review-process":
      return PortableTextWrapper;
    case "peer-review-statuses":
      return PeerReviewStatus;
    case "publication-guidelines-for-reviewer":
      return PortableTextWrapper;
    case "publication-ethics-for-publishers":
      return PortableTextWrapper;
    case "publication-guidelines-for-authors":
      return InformationSection;
    case "editor-in-chief":
      return TeamSection;
    case "deputy-editor-in-chief":
      return TeamSection;
    case "publication-board-chair":
      return TeamSection;
    case "associate-editor":
      return TeamSection;
    case "board-of-editors":
      return TeamSection;
    case "archives":
      return ArchivesWrapper;
    case "submit-info":
      return SubmitWrapper;
    default:
      break;
  }
};
