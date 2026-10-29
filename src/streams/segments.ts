import type { StreamData } from "./types.js";
import stream0 from "./segments/23rd-st.js";
import stream1 from "./segments/23rd-st-rev.js";
import stream2 from "./segments/acropolis-sprint.js";
import stream3 from "./segments/acropolis-sprint-rev.js";
import stream4 from "./segments/alley-sprint.js";
import stream5 from "./segments/alley-sprint-rev.js";
import stream6 from "./segments/alpe-du-zwift.js";
import stream7 from "./segments/aqueduc-kom.js";
import stream8 from "./segments/aqueduc-kom-rev.js";
import stream9 from "./segments/ballon-sprint.js";
import stream10 from "./segments/ballon-sprint-rev.js";
import stream11 from "./segments/boardwalk-sprint.js";
import stream12 from "./segments/boardwalk-sprint-rev.js";
import stream13 from "./segments/bologna-tt.js";
import stream14 from "./segments/box-hill.js";
import stream15 from "./segments/breakaway-brae.js";
import stream16 from "./segments/breakaway-brae-rev.js";
import stream17 from "./segments/broad-st.js";
import stream18 from "./segments/brooklyn-bridge-kom.js";
import stream19 from "./segments/castle-kom.js";
import stream20 from "./segments/castle-park-sprint.js";
import stream21 from "./segments/castle-park-sprint-rev.js";
import stream22 from "./segments/center-sprint.js";
import stream23 from "./segments/center-sprint-rev.js";
import stream24 from "./segments/central-park-loop-rev.js";
import stream25 from "./segments/champions-sprint.js";
import stream26 from "./segments/champs-elysees.js";
import stream27 from "./segments/champs-elysees-rev.js";
import stream28 from "./segments/country-sprint.js";
import stream29 from "./segments/crit-city.js";
import stream30 from "./segments/crit-city-rev.js";
import stream31 from "./segments/eglise-sprint.js";
import stream32 from "./segments/epic-kom.js";
import stream33 from "./segments/epic-kom-rev.js";
import stream34 from "./segments/fox-hill.js";
import stream35 from "./segments/fuego-flats.js";
import stream36 from "./segments/fuego-flats-rev.js";
import stream37 from "./segments/hilly-loop.js";
import stream38 from "./segments/hilly-loop-rev.js";
import stream39 from "./segments/innsbruck-kom.js";
import stream40 from "./segments/innsbruck-kom-rev.js";
import stream41 from "./segments/innsbruck-sprint.js";
import stream42 from "./segments/innsbruck-sprint-rev.js";
import stream43 from "./segments/innsbruck-uci-lap.js";
import stream44 from "./segments/itza-kom.js";
import stream45 from "./segments/jarvis-kom.js";
import stream46 from "./segments/jarvis-kom-rev.js";
import stream47 from "./segments/jarvis-lap.js";
import stream48 from "./segments/jarvis-lap-rev.js";
import stream49 from "./segments/jarvis-sprint.js";
import stream50 from "./segments/jarvis-sprint-rev.js";
import stream51 from "./segments/jungle-loop.js";
import stream52 from "./segments/jungle-loop-rev.js";
import stream53 from "./segments/keith-hill.js";
import stream54 from "./segments/leith-hill.js";
import stream55 from "./segments/london-loop.js";
import stream56 from "./segments/london-sprint.js";
import stream57 from "./segments/london-sprint-rev.js";
import stream58 from "./segments/lutece-sprint.js";
import stream59 from "./segments/lutece-sprint-rev.js";
import stream60 from "./segments/manhattan-sprint.js";
import stream61 from "./segments/manhattan-sprint-rev.js";
import stream62 from "./segments/marina-sprint.js";
import stream63 from "./segments/marina-sprint-rev.js";
import stream64 from "./segments/mayan-mountainside-kom.js";
import stream65 from "./segments/monceau-sprint.js";
import stream66 from "./segments/montmartre-kom.js";
import stream67 from "./segments/new-york-kom.js";
import stream68 from "./segments/new-york-kom-rev.js";
import stream69 from "./segments/new-york-sprint.js";
import stream70 from "./segments/new-york-sprint-rev.js";
import stream71 from "./segments/pave-sprint.js";
import stream72 from "./segments/pave-sprint-rev.js";
import stream73 from "./segments/petit-kom.js";
import stream74 from "./segments/prime.js";
import stream75 from "./segments/prime-rev.js";
import stream76 from "./segments/radio-tower-kom.js";
import stream77 from "./segments/railway-sprint.js";
import stream78 from "./segments/richmond-kom.js";
import stream79 from "./segments/richmond-kom-rev.js";
import stream80 from "./segments/richmond-sprint.js";
import stream81 from "./segments/richmond-sprint-rev.js";
import stream82 from "./segments/richmond-uci-course.js";
import stream83 from "./segments/rooftop-kom.js";
import stream84 from "./segments/sasquatch-sprint.js";
import stream85 from "./segments/sasquatch-sprint-rev.js";
import stream86 from "./segments/sgurr-summit-north.js";
import stream87 from "./segments/sgurr-summit-south.js";
import stream88 from "./segments/shisa-sprint.js";
import stream89 from "./segments/shisa-sprint-rev.js";
import stream90 from "./segments/stoneway-sprint.js";
import stream91 from "./segments/stoneway-sprint-rev.js";
import stream92 from "./segments/tchou-tchou-sprint.js";
import stream93 from "./segments/temple-kom-from-castle-side.js";
import stream94 from "./segments/temple-kom-from-fishing-village-side.js";
import stream95 from "./segments/the-clyde-kicker.js";
import stream96 from "./segments/the-grade-kom.js";
import stream97 from "./segments/the-hill-kom.js";
import stream98 from "./segments/the-peristyle-sprint.js";
import stream99 from "./segments/the-peristyle-sprint-rev.js";
import stream100 from "./segments/tidepool-sprint.js";
import stream101 from "./segments/tidepool-sprint-rev.js";
import stream102 from "./segments/titans-grove-kom.js";
import stream103 from "./segments/titans-grove-kom-rev.js";
import stream104 from "./segments/tower-sprint.js";
import stream105 from "./segments/tower-sprint-rev.js";
import stream106 from "./segments/ventoux-kom.js";
import stream107 from "./segments/village-sprint.js";
import stream108 from "./segments/village-sprint-rev.js";
import stream109 from "./segments/volcano-circuit.js";
import stream110 from "./segments/volcano-circuit-rev.js";
import stream111 from "./segments/volcano-kom.js";
import stream112 from "./segments/watopia-sprint.js";
import stream113 from "./segments/watopia-sprint-rev.js";
import stream114 from "./segments/woodland-sprint.js";
import stream115 from "./segments/woodland-sprint-rev.js";
import stream116 from "./segments/yorkshire-kom.js";
import stream117 from "./segments/yorkshire-kom-rev.js";
import stream118 from "./segments/yorkshire-sprint.js";
import stream119 from "./segments/yorkshire-sprint-rev.js";
import stream120 from "./segments/zwift-kom.js";
import stream121 from "./segments/zwift-kom-rev.js";
export const segments: Readonly<Record<string, StreamData | undefined>> = {
  "23rd-st": stream0,
  "23rd-st-rev": stream1,
  "acropolis-sprint": stream2,
  "acropolis-sprint-rev": stream3,
  "alley-sprint": stream4,
  "alley-sprint-rev": stream5,
  "alpe-du-zwift": stream6,
  "aqueduc-kom": stream7,
  "aqueduc-kom-rev": stream8,
  "ballon-sprint": stream9,
  "ballon-sprint-rev": stream10,
  "boardwalk-sprint": stream11,
  "boardwalk-sprint-rev": stream12,
  "bologna-tt": stream13,
  "box-hill": stream14,
  "breakaway-brae": stream15,
  "breakaway-brae-rev": stream16,
  "broad-st": stream17,
  "brooklyn-bridge-kom": stream18,
  "castle-kom": stream19,
  "castle-park-sprint": stream20,
  "castle-park-sprint-rev": stream21,
  "center-sprint": stream22,
  "center-sprint-rev": stream23,
  "central-park-loop-rev": stream24,
  "champions-sprint": stream25,
  "champs-elysees": stream26,
  "champs-elysees-rev": stream27,
  "country-sprint": stream28,
  "crit-city": stream29,
  "crit-city-rev": stream30,
  "eglise-sprint": stream31,
  "epic-kom": stream32,
  "epic-kom-rev": stream33,
  "fox-hill": stream34,
  "fuego-flats": stream35,
  "fuego-flats-rev": stream36,
  "hilly-loop": stream37,
  "hilly-loop-rev": stream38,
  "innsbruck-kom": stream39,
  "innsbruck-kom-rev": stream40,
  "innsbruck-sprint": stream41,
  "innsbruck-sprint-rev": stream42,
  "innsbruck-uci-lap": stream43,
  "itza-kom": stream44,
  "jarvis-kom": stream45,
  "jarvis-kom-rev": stream46,
  "jarvis-lap": stream47,
  "jarvis-lap-rev": stream48,
  "jarvis-sprint": stream49,
  "jarvis-sprint-rev": stream50,
  "jungle-loop": stream51,
  "jungle-loop-rev": stream52,
  "keith-hill": stream53,
  "leith-hill": stream54,
  "london-loop": stream55,
  "london-sprint": stream56,
  "london-sprint-rev": stream57,
  "lutece-sprint": stream58,
  "lutece-sprint-rev": stream59,
  "manhattan-sprint": stream60,
  "manhattan-sprint-rev": stream61,
  "marina-sprint": stream62,
  "marina-sprint-rev": stream63,
  "mayan-mountainside-kom": stream64,
  "monceau-sprint": stream65,
  "montmartre-kom": stream66,
  "new-york-kom": stream67,
  "new-york-kom-rev": stream68,
  "new-york-sprint": stream69,
  "new-york-sprint-rev": stream70,
  "pave-sprint": stream71,
  "pave-sprint-rev": stream72,
  "petit-kom": stream73,
  prime: stream74,
  "prime-rev": stream75,
  "radio-tower-kom": stream76,
  "railway-sprint": stream77,
  "richmond-kom": stream78,
  "richmond-kom-rev": stream79,
  "richmond-sprint": stream80,
  "richmond-sprint-rev": stream81,
  "richmond-uci-course": stream82,
  "rooftop-kom": stream83,
  "sasquatch-sprint": stream84,
  "sasquatch-sprint-rev": stream85,
  "sgurr-summit-north": stream86,
  "sgurr-summit-south": stream87,
  "shisa-sprint": stream88,
  "shisa-sprint-rev": stream89,
  "stoneway-sprint": stream90,
  "stoneway-sprint-rev": stream91,
  "tchou-tchou-sprint": stream92,
  "temple-kom-from-castle-side": stream93,
  "temple-kom-from-fishing-village-side": stream94,
  "the-clyde-kicker": stream95,
  "the-grade-kom": stream96,
  "the-hill-kom": stream97,
  "the-peristyle-sprint": stream98,
  "the-peristyle-sprint-rev": stream99,
  "tidepool-sprint": stream100,
  "tidepool-sprint-rev": stream101,
  "titans-grove-kom": stream102,
  "titans-grove-kom-rev": stream103,
  "tower-sprint": stream104,
  "tower-sprint-rev": stream105,
  "ventoux-kom": stream106,
  "village-sprint": stream107,
  "village-sprint-rev": stream108,
  "volcano-circuit": stream109,
  "volcano-circuit-rev": stream110,
  "volcano-kom": stream111,
  "watopia-sprint": stream112,
  "watopia-sprint-rev": stream113,
  "woodland-sprint": stream114,
  "woodland-sprint-rev": stream115,
  "yorkshire-kom": stream116,
  "yorkshire-kom-rev": stream117,
  "yorkshire-sprint": stream118,
  "yorkshire-sprint-rev": stream119,
  "zwift-kom": stream120,
  "zwift-kom-rev": stream121,
};
