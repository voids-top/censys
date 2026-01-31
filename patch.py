import glob

host_replacer = """
if (typeof(to_replace_variable) == "string") {
    to_replace_variable = to_replace_variable.replaceAll("https://voids.top/", "https://capi.voids.top/")
} else if (typeof(to_replace_variable) == "object") {
    to_replace_variable = new URL(to_replace_variable.href.replaceAll("https://voids.top/", "https://capi.voids.top/"))
}
""".strip().replace("\n", ";").replace("    ", "").replace(";};", "}; ").replace(";}", "}").replace("{;", "{")

check = []
for folder in ["build/*.js", "build/**/*.js"]:
    for file in glob.glob(folder):
        src = open(file, "r", encoding="utf-8").read()
        before = src
        original = src
        src = src.replace('"/search', '"/censys')
        if src != original:
            original = src
            check.append(1)
            print("[1] patched", file)
        src = src.replace('"https://platform.censys.io"', '"https://capi.voids.top"')
        if src != original:
            original = src
            check.append(2)
            print("[2] patched", file)
        src = src.replace('let t=await be(i,e);', host_replacer.replace("to_replace_variable", "i") + 'let t = await be(i,e);')
        if src != original:
            original = src
            check.append(3)
            print("[3] patched", file)
        src = src.replace('`/search', '`/censys')
        if src != original:
            original = src
            check.append(4)
            print("[4] patched", file)
        src = src.replace('"path":"search"', '"path":"censys"')
        if src != original:
            original = src
            check.append(5)
            print("[5] patched", file)
        src = src.replace('"routes/search"', '"routes/censys"')
        if src != original:
            original = src
            check.append(6)
            print("[6] patched", file)
        src = src.replace('"routes/search._index"', '"routes/censys._index"')
        if src != original:
            original = src
            check.append(7)
            print("[7] patched", file)
        src = src.replace('"routes/search.language"', '"routes/censys.language"')
        if src != original:
            original = src
            check.append(8)
            print("[8] patched", file)
        src = src.replace('"routes/search.report"', '"routes/censys.report"')
        if src != original:
            original = src
            check.append(9)
            print("[9] patched", file)
        src = src.replace('"routes/search.report.data"', '"routes/censys.report.data"')
        if src != original:
            original = src
            check.append(10)
            print("[10] patched", file)
        src = src.replace('"routes/search.report.data.table"', '"routes/censys.report.data.table"')
        if src != original:
            original = src
            check.append(11)
            print("[11] patched", file)
        src = src.replace('"routes/search.report.data.json"', '"routes/censys.report.data.json"')
        if src != original:
            original = src
            check.append(12)
            print("[12] patched", file)
        src = src.replace('let g=[["q",r],["data_sets",e.join(",")]];', 'let g=[["q",((new URL(window.location.href)).searchParams.get("q") || "").trim()],["data_sets",e.join(",")]];')
        if src != original:
            original = src
            check.append(13)
            print("[13] patched", file)
        src = src.replace('defaultSuggestions:m,contextSuggestions:g,initialValue:e,', 'defaultSuggestions:m,contextSuggestions:g,initialValue:e||((new URL(window.location.href)).searchParams.get("q") || "").trim(),')
        if src != original:
            original = src
            check.append(14)
            print("[14] patched", file)
        src = src.replace('m&&(p=v(e,s,typeof m=="boolean"?"and":m)),r.set("q",p)}', 'm&&(p=v(((new URL(window.location.href)).searchParams.get("q") || "").trim(),s,typeof m=="boolean"?"and":m)),r.set("q",p)}')
        if src != original:
            original = src
            check.append(15)
            print("[15] patched", file)
        if before != src:
            open(file, "w", encoding="utf-8").write(src)
        src = src.replace(')&&(0,Co.jsxs)("div",{className:Uo.titleContainer,', '&&false&&(0,Co.jsxs)("div",{className:Uo.titleContainer,')
        if src != original:
            original = src
            check.append(16)
            print("[16] patched", file)
        if before != src:
            open(file, "w", encoding="utf-8").write(src)
        src = src.replace('return f?(0,$.jsx)(S,{testId:y', 'return false?(0,$.jsx)(S,{testId:y')
        if src != original:
            original = src
            check.append(17)
            print("[17] patched", file)
        if before != src:
            open(file, "w", encoding="utf-8").write(src)
        src = src.replace('});return e?(0,le.jsx)("li",{className:j(xe.item,', '});if(true){return null};return e?(0,le.jsx)("li",{className:j(xe.item,')
        if src != original:
            original = src
            check.append(18)
            print("[18] patched", file)
        if before != src:
            open(file, "w", encoding="utf-8").write(src)

print()
for n in range(18):
    if not n+1 in check:
        print(f"[!] Patch {n+1} is not applied")