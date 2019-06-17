import React from 'react'
import {
  render,
} from '@testing-library/react'
import BookmarkDisplay from './bookmarkDisplay';

describe('bookmarkDisplay', () => {
    const links = ['http://google.com', 'b'];
    it('should display all the links', () => {
        const { getByText } = render(
            <BookmarkDisplay links={links}/>
        )

        expect(getByText(/google/i)).toBeDefined();
    });

});