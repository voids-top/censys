import glob

for file in glob.glob("**/*.js"):
    src = open(file, "r", encoding="utf-8").read()
    before = src
    original = src
    src = src.replace('"/search"', '"/censys"')
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
    if before != src:
        open(file, "w", encoding="utf-8").write(src)