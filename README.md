# normal_procedure

> masters_project@hFk_Bremen/DM

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

“We no longer like to think about bureaucracy, yet it informs every aspect of our existence. It is as if, as a planetary civilization, we have decided to clap our hands over our ears and start humming whenever this topic comes up.”

Normal Procedure is a web-based pseudo-game that roams in the bureaucratic realm. Its raison d’être is to narrate the cumbersome experience when faced with such an engagement.

The environment and the interactivity within the game manifest themselves as metaphors for bureaucratic elements. In this, the pseudo-game does not offer a final state of win or loss, therefore, possibly the only foreseeable reward the player would attain is to be able to go about their business.

“Paperwork is designed to be maximally simple and self contained. Even when forms are complex, even bafflingly complex, it’s by an endless accretion of very simple but apparently contradictory elements, like a maze composed entirely of the endless juxtaposition of two or three very simple geometric motifs.”

The gaming environment reserves the right to be inaccessible outside of the predetermined timetable. The esoteric clock defines the office hours within which the pseudo-game is at service.
The pseudo-game offers a selection between two Bureaubots with no particular distinction from one another. These two act as one’s legal representatives within the bureaucratic domain, except, without the high-level discretion one would usually expect from such entities. Here, R2R and JMIA are in commission to make every detail of one’s individual case public on social media.
The case assigner is the tool which is responsible for the assignment of a designated case unique to the player. At the end of some meticulous calculations, the player is assigned a case in one of the questionable departments such as ‘Department of Reasonable Outbursts’, or ‘Department of Mediocre Breakthroughs’.
The individual case assigned in the previous step is then visually translated as the initial paperwork cluster that each player would proceed thereon. To interact with their personal case, within the bureaucratic landscape, the player uses the the interface as file cabinet. Through it, they are able to push papers within the department internally or externally such as searching for medical help, or suing the department in question. They also might choose to provoke an invention by a higher office through ‘deregulation’.
The introduced modules lodged in their chosen start location after being initialized, autonomously decide on how to get to their target location within the cluster. For this they use a three dimensional A\* algorithm which allows them to assess every potential path leading to their target. Although the modules are inclined to pick an optimum path, they have a tendency to self-replicate, thus, exponentially making it harder to find their intended path within the more and more populated cluster until the point of complete occlusion.

TODOS:

- additional (path finding) behavior for the units: hesitation, size morph, path change, path destruction
- create a landscape of clusters using other players' cases
- rework the textures and lighting in threejs
