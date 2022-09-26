import BookCard  from "../src/components/biblioteca/book";


test('renderBookCard', () => {
    //const book = {
    //    title: 'Test',
    //    id: '1',
    //    content: 'Test content',
    //    file: 'Test file',
    //    code: 'Test code',
    //};
    const p = {
        books: [
            {
                title: 'Test',
                id: '1',
                content: 'Test content',
                file: 'Test file',
                code: 'Test code',
            },
        ],
    }

    const b = new BookCard(p);
    expect(b).not.toBe(null);


});