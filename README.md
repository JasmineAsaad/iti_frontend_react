# iti_frontend_react
## project notes
# 🏷️ The Ultimate HTML Tags & Terms Reference Guide

## 🟢 1. Core Definitions (Terminology)
1. HTML (HyperText Markup Language): The standard markup language used to create the structure of web pages.
2. Tag: The basic building block of HTML, enclosed in angle brackets (e.g., `<h1>`).
3. Element: The complete component, consisting of the start tag, content, and end tag.
4. Attribute: Special words used inside the opening tag to control the element's behavior or appearance (e.g., `href` or `src`).
5. Semantic HTML: The practice of using HTML tags that inherently describe the meaning of the content, not just its look (e.g., `<header>`, `<article>`).
6. Block-level Element: An element that starts on a new line and takes up the full width available (e.g., `<div>`, `<p>`).
7. Inline Element: An element that does not start on a new line and only takes up as much width as necessary (e.g., `<span>`, `<a>`).

---

## 🏗️ 2. Document Structure
8. <!DOCTYPE html> : Defines the document type and tells the browser that the page is using HTML5.
9. <html> : The root element that wraps all the content on the entire page.
10. <head> : Contains machine-readable information (metadata) about the document, like the title and stylesheets.
11. <title> : Sets the title of the web page, which appears in the browser's tab.
12. <meta> : Specifies metadata such as character encoding (`utf-8`), page descriptions, and keywords for SEO.
13. <body> : Contains all the visible content of the web page (text, images, links).

---

## 📝 3. Text & Headings
14. <h1> : Heading level 1. The most important heading, usually used once per page.
15. <h2> : Heading level 2. Used for main sections.
16. <h3> : Heading level 3. Used for sub-sections.
17. <h4> : Heading level 4. Used for sub-sub-sections.
18. <h5> : Heading level 5. Less prominent heading.
19. <h6> : Heading level 6. The smallest heading level.
20. <p> : Paragraph. Used to define regular blocks of text.
21. <br> : Line Break. Forces a new line within text without creating a new paragraph (self-closing).
22. <hr> : Horizontal Rule. Creates a thematic break or horizontal line to separate content (self-closing).

---

## 🎨 4. Text Formatting
23. <strong> : Displays text in bold and signals to search engines that the content is highly important.
24. <b> : Displays text in bold purely for visual style, without adding any semantic importance.
25. <em> : Displays text in italics and places emphasis on the words.
26. <i> : Displays text in italics purely for visual alternative voice or mood, without semantic weight.
27. <mark> : Highlights text with a yellow background (like a physical highlighter marker).
28. <small> : Renders text in a smaller font size than the surrounding text, often used for legal fine print.
29. <del> : Represents deleted text, rendering a strikethrough line over the text.
30. <ins> : Represents inserted text, rendering an underline beneath the text.
31. <sub> : Subscript. Renders text lower and smaller (e.g., chemical formulas like H₂O).
32. <sup> : Superscript. Renders text higher and smaller (e.g., mathematical exponents like 2³).
33. <blockquote> : Used to indicate a long quotation block cited from another source, usually indenting the text.
34. <q> : Used for short, inline quotations. Automatically wraps the text in quotation marks.
35. <code> : Displays text in a monospaced font, perfect for representing fragments of computer code.
36. <pre> : Preformatted text. Keeps spaces, tabs, and line breaks exactly as they are written in the code.

---

## 🔗 5. Links & Media
37. <a> : Anchor tag. Creates hyperlinks to other web pages or locations, using the `href` attribute.
38. <img> : Displays an image. Requires the `src` (source path) and `alt` (alternative text description) attributes.
39. <audio> : Embeds audio files or music streams into the webpage.
40. <video> : Embeds video files directly onto the webpage.
41. <source> : Used inside `<audio>` or `<video>` elements to specify multiple media files and fallback formats.

---

## 📜 6. Lists
42. <ul> : Unordered List. Creates a bulleted list of items.
43. <ol> : Ordered List. Creates a numbered or lettered list of items.
44. <li> : List Item. Represents a single item placed inside a `<ul>` or `<ol>`.
45. <dl> : Description List. Encloses a list of terms and their corresponding descriptions.
46. <dt> : Description Term. Specifies a term/name inside a description list.
47. <dd> : Description Details. Provides the definition or description for the preceding `<dt>`.

---

## 📊 7. Tables
48. <table> : The container element used to build a data table.
49. <tr> : Table Row. Defines a horizontal row of cells inside a table.
50. <th> : Table Header. Defines a header cell, making the text bold and centered by default.
51. <td> : Table Data. Defines a standard cell containing data inside a row.
52. <thead> : Groups the header content of a table.
53. <tbody> : Groups the main body content of a table.
54. <tfoot> : Groups the footer or summary content at the bottom of a table.
55. <caption> : Adds a title or description above the entire table.

---

## 📝 8. Forms & Inputs
56. <form> : The wrapper element used to collect user input (e.g., login screens, contact forms).
57. <input> : A versatile input field where users enter data. Controlled by types like `text`, `password`, `email`.
58. <label> : Connects a text description to a specific input element, improving accessibility.
59. <textarea> : A multi-line text input box, ideal for longer messages, reviews, or comments.
60. <button> : A clickable button used to submit forms or trigger JavaScript events.
61. <select> : Creates a drop-down selection menu for the user.
62. <option> : Defines the individual items or choices inside a `<select>` drop-down list.
63. <fieldset> : Groups logically related fields and inputs together inside a form with a visible border.
64. <legend> : Sets a caption or title for the border box created by a `<fieldset>`.

---

## 🧱 9. Layout Containers (Generic)
65. <div> : Division. A generic block-level container with no structural meaning, used for layout and CSS styling.
66. <span> : A generic inline container with no structural meaning, used to style small snippets of text.

---

## 🏛️ 10. Semantic HTML5 Elements
67. <header> : Represents the introductory container at the top of a page or section (usually holds logo, navigation).
68. <nav> : Contains major navigation links for moving around the website.
69. <main> : Encloses the unique, primary content of the document. Can only appear once per page.
70. <section> : Defines a standalone, thematic section of content that typically includes a heading.
71. <article> : Wraps an independent, self-contained piece of content that could be syndicalized (e.g., a blog post, news story).
72. <aside> : Represents content indirectly related to the main topic, like sidebars, callout boxes, or ads.
73. <footer> : The footer section located at the bottom of a page or section (usually holds copyrights, links).

---

## ⚙️ 11. Advanced & Scripts
74. <script> : Used to embed or reference client-side JavaScript code.
75. <style> : Used to write internal CSS code to style the current HTML page directly inside the `<head>`.
76. <link> : Connects external files to the document, most commonly used to link external CSS files or web fonts.
77. <iframe> : Inline Frame. Embeds another HTML page or external service (like a YouTube video) inside your current page.
78. <canvas> : Provides a scriptable, blank drawing area used to render graphs, animations, or games via JavaScript.
79. <svg> : Scalable Vector Graphics. Used to embed sharp XML-based vector images that don't lose quality when zoomed.
80. <!-- --> : Comments. Allows developers to write notes within the code that are completely hidden from the browser window.
