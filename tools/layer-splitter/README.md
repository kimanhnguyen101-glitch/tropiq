# Layer Splitter

Separate app (not part of the Tropi Q website). Splits a flat PNG/JPG into editable layers, fully in the browser.

Run locally (ES modules need http, not file://):

    cd tools/layer-splitter && python3 -m http.server 8080   # then open http://localhost:8080

Needs internet on first use (AI models are downloaded once from CDN and cached by the browser).
Features: subject/background split, click-to-cut objects, per-layer PNG, ZIP of all layers, layered PSD.
