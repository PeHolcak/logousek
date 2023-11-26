import React, { lazy } from "react";

const AsActivity = lazy(() => import("@components/activities/visual/a_s"))
const VisualDifActivity = lazy(() => import("@components/activities/visual/visual_differentiation"))
const VisualMemoryActivity = lazy(() => import("@components/activities/visual/visual_memory"))
const AudioDifferentiation = lazy(() => import("@components/activities/audio/audio-differentiation"))
const Memory = lazy(() => import("components/activities/audio/memory"))
const ThreeCards = lazy(() => import("@components/activities/seriality/three-cards"))
const LanguagePracticing = lazy(() => import("@components/activities/oromotorics/language-practicing"))
const Syllables = lazy(() => import("@components/activities/audio/syllables"))

export const getActivity = (activityName: string) => {
  switch (activityName) {
    case "a_s":
      return AsActivity;
    case "visual_memory":
      return VisualMemoryActivity;
    case "visual_differentiation":
      return VisualDifActivity;
    case "sound_differentiation":
    case "word_differentiation":
      return AudioDifferentiation;
    case "audio_memory":
      return Memory;
    case "syllables":
      return Syllables;
    case "3_pictures":
      return ThreeCards;
    case "language_practicing":
      return LanguagePracticing
    default:
      return ActivityNotFound;
  }
};

type ActivityNotFoundProps = { complexity: string, tasksElapsed: number, onHandleChanged: () => void }

const ActivityNotFound: React.FC<ActivityNotFoundProps> = () => {
  return <div>Typ Aktivity nebyla nalezena</div>;
};
