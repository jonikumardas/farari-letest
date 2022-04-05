import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-section'>
            <h1> This is a blog </h1>
            <div className="container">
            <div className="artical-blog1">
                <h2>Context Api</h2>
                    <p>The Context API is a React structure.its use for solving repite props use which enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. if is use contex api i must have to write .provider
                    This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier
                </p>

            </div>
            <div className="artical-blog2">
                <h2>Semantic Elements</h2>
                    <p>
                        Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it.
                </p>

            </div>
            <div className="blog-artical3">
                <h2>Inline block vs Inline block Elements</h2>
                <p>
                Block Elements take the full width irrespective of their sufficiency. Inline elements don't start in a new line. Block elements always start in a line. Inline elements allow other inline elements to sit behind.An inline element has no line break before or after it.it tolerates HTML elements next to it .Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.</p>
            </div>
            </div>
            </div>
    );
};

export default Blogs;