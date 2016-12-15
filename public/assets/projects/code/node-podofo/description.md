# Background

Back at work, I needed a PDF library to implement a resume parser. As the main
stack of the company was Node.js, I set out to look for a library that would
enable me to read PDF files. Disappointingly, there weren't many. Most libraries
out there would only perform text extraction or PDF-to-image conversion. I needed
something more low level - something that could get the coordinates of graphic/text
elements in the PDF.

# Solution

There are many PDF libraries that are written in C++. As it is relatively
trivial to write a Node.js binding, I decided to use [PoDoFo](http://podofo.sourceforge.net/).

# Challenges

There is a need to marshal datatypes between C++ and the representation used by
the JavaScript engine (V8). In addition, both languages contain significant
differences, hence the need to adapt the PoDoFo API in a way that can be suitably
consumed within JavaScript.

# Technologies

C++, Node.js