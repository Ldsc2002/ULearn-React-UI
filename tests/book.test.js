import BookCard  from "../src/components/biblioteca/book";
import {truncate} from "../src/components/biblioteca/book";


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


test('renderBookCard2', () => {
    const p = {
        books: [
            {
                title: 'Test With long name',
                id: '1',
                content: 'Test content',
                file: 'Test file',
                code: 'Test code',
            },
        ],
    }

    const b = new BookCard(p);
    expect(b).not.toBe(null);
    //expect(b.books[0].title).toBe('Test Wi...');
    
} );

//test truncate
test('truncate', () => {
    const s = 'Test With long name';
    const t = truncate(s, 10);
    expect(t).toBe('Test With...');
    //expect(b).not.toBe(null);
});