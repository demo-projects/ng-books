export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

export const mockBook = {
  id        : "V0swDwAAQBAJ",
  volumeInfo: {
    title              : "Angular 2 Interview Questions and Answers",
    subtitle           : "With Typescript and Angular 4",
    authors            : [
      "Anil Singh"
    ],
    publisher          : "Educreation Publishing",
    publishedDate      : "2017-08-16",
    description        : "This book has the collection of Angular 2 Interview Questions and Answers with TypeScript and basic of Angular 4. Angular 2 is a most popular framework for developing mobile as well as web applications. Angular 2 is so simpler, faster, modular and instrumented design and it is developed by Google and Misko Hevery is the father of Angular. You can learn complete knowledge of Angular 2, TypeScript and Angular 4 simpler and faster with examples. This book has important questions and answers for beginner and expert level of developers and it's containing 115 questions and answers with TypeScript, Angular 4 and examples.",
    imageLinks         : {
      smallThumbnail: "http://books.google.com/books/content?id=V0swDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail     : "http://books.google.com/books/content?id=V0swDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
  }
};
