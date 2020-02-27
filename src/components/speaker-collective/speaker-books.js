import React from 'react';

const BookPreview = ({
  book
}) => (
  <>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-4">
        <img src={book.frontmatter.photo} />
      </div>
      <div className="col-sm-8">
        <p dangerouslySetInnerHTML={{ __html: book.html }}></p>
        <a href={book.frontmatter.buy} className="tem-btn nav-link move-eff"><span>Purchase</span></a>
      </div>
    </div>
  </>
)

const SpeakerBooks = ({
  name,
  books
}) => {
  const Books = books
    ? books
        .filter(book => book.frontmatter.author === name)
        .map((book, i) =>
          <BookPreview key={i} book={book} />
        )
    : null;
  return (
      <>
        {Books
          ? <>
              <h2 className="text-center">Resources</h2>
              <hr />
              {Books}
            </>
          : null
        }
      </>
  )
}
export default SpeakerBooks;