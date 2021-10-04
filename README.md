# Hello, Simspace Team! 👋

Come check out my first venture into the world of TypeScript! _MY_ main takeaway - if I continue working in TS, I'll need to disable my auto closing tag extension, because having to hit backspace 9 times every time I type `varName: Array<string>` is way too much work.

Anyways, [here](https://eruanne2.github.io/doggo-types/)'s what you came for. 🐕

## Dependencies

I decided to use Redux to set up a small front-end state. Although it's a small project and there are far simpler ways to keep track of the dogs, I noticed that your team uses Redux so I thought I'd give you the opportunity to review my implementation. In addition, I used `redux-thunk` to smoothly handle my API calls and `redux-logger` for testing/debugging purposes.

Although I spent several hours reading up on `fp-ts` and learned a bit about some other functional programming libraries as well, I chose not to use any of them for this project. Given that I am already a newbie to TypeScript, functional programming concepts, and hooks, I hope you'll recognize the time constraints that forced this decision.

## Design Decisions

Originally, I divided the application into 4 main components at the top level: the `Header`, the `SearchBar`, the `BreedIndex`, and the `ImageIndex`. However, the `ImageIndex` needs to know which breed is currently selected, and so it quickly made sense to place it as a child component of the `BreedIndex`.

Once the app was fully functional, I looked back over it and realized that the `Header` component offered very little logic and was simply a barrier to the props that had to be threaded from the `App`, through `Header`, and down to `SearchBar`. So I moved the searchbar and its logic directly into the `Header` and removed the `SearchBar` component entirely. This made for a cleaner, simpler structure without any unnecessary prop-threading. 

## Future Improvements

A few things I would like to have improved, had time allowed:
 - When clicking on the 'Dogs' header, it would clear the search bar and take the user back to the default view.
 - When typing in the search bar, the image gallery would disappear and the selected button, if visible, would deselect (but be able to be selected again upon click).
 - Smoother loading of the gallery images (currently, the column by column loading is a bit awkward). 

## Feedback

I took the liberty of making 2 small tweaks to the provided UI design, both with regards to the photo gallery. Firstly, I gave the image grid a left and right margin so that it does not expand beyond the width of the button grid above. Secondly, I filled in the images in vertical rows where each image could retain its original dimensions without leaving extra space between them. These two changes significantly improved the look of the website (especially the latter).
