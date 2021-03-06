import React from 'react';
import { Link } from 'react-router';

const Faq = () => (
  <div className="footer-content">
    <br/>
    <Link to="/library">Back to home</Link>
    <h1>FAQs</h1>
    <article>
      <h2>Can I slow down Knowtation?</h2>
      <p>Yes.</p>
    </article>
    <article>
      <h2>Can I loop a section?</h2>
      <p>Yes.</p>
    </article>
    <article>
      <h2>Does Knowtation work on Mobile?</h2>
      <p>Yes.</p>
    </article>
  </div>
);

export default Faq;
