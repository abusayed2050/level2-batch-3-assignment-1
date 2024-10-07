"use strict";
{
    const isRecentBook = (book) => {
        const todaydate = new Date().getFullYear() - book.publishedYear;
        if (todaydate <= 5) {
            return true;
        }
        else {
            return false;
        }
    };
    const book1 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };
    const myRecentBook = isRecentBook(book1);
    console.log(myRecentBook);
}
