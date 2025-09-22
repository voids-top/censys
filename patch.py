import glob

for folder in ["build/*.js", "build/**/*.js"]:
    for file in glob.glob(folder):
        src = open(file, "r", encoding="utf-8").read()
        before = src
        original = src
        src = src.replace('"/search', '"/censys')
        if src != original:
            original = src
            print("[1] patched", file)
        src = src.replace('"https://platform.censys.io"', '"https://capi.voids.top"')
        if src != original:
            original = src
            print("[2] patched", file)
        src = src.replace('let t=await be(i,e);', 'let t=await be(i.replaceAll("https://voids.top/", "https://capi.voids.top/"),e);')
        if src != original:
            original = src
            print("[3] patched", file)
        src = src.replace('`/search', '`/censys')
        if src != original:
            original = src
            print("[5] patched", file)
        src = src.replace('"path":"search"', '"path":"censys"')
        if src != original:
            original = src
            print("[6] patched", file)
        src = src.replace('"routes/search"', '"routes/censys"')
        if src != original:
            original = src
            print("[7] patched", file)
        src = src.replace('"routes/search._index"', '"routes/censys._index"')
        if src != original:
            original = src
            print("[8] patched", file)
        src = src.replace('"routes/search.language"', '"routes/censys.language"')
        if src != original:
            original = src
            print("[9] patched", file)
        src = src.replace('"routes/search.report"', '"routes/censys.report"')
        if src != original:
            original = src
            print("[10] patched", file)
        src = src.replace('"routes/search.report.data"', '"routes/censys.report.data"')
        if src != original:
            original = src
            print("[11] patched", file)
        src = src.replace('"routes/search.report.data.table"', '"routes/censys.report.data.table"')
        if src != original:
            original = src
            print("[12] patched", file)
        src = src.replace('"routes/search.report.data.json"', '"routes/censys.report.data.json"')
        if src != original:
            original = src
            print("[13] patched", file)
        src = src.replace('throw Error(h(418));', '{}')
        if src != original:
            original = src
            print("[14] patched", file)
        src = src.replace('throw ka(),Error(h(418));', '{}')
        if src != original:
            original = src
            print("[15] patched", file)
        if before != src:
            open(file, "w", encoding="utf-8").write(src)