# Resume sources

The English and Chinese CVs share `resume.sty` and compile with `pdflatex`.

```bash
cd docs/resume
mkdir -p ../../public/files
pdflatex -interaction=nonstopmode -halt-on-error cv.tex
pdflatex -interaction=nonstopmode -halt-on-error cv.tex
pdflatex -interaction=nonstopmode -halt-on-error cv-CN.tex
pdflatex -interaction=nonstopmode -halt-on-error cv-CN.tex
mv cv.pdf ../../public/files/cv.pdf
mv cv-CN.pdf ../../public/files/cv-CN.pdf
```

The second pass resolves PDF metadata and hyperlinks. Generated auxiliary files should not be committed.
