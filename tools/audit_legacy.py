"""Summarize the retained legacy HTML without executing its scripts."""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys


class Audit(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.sections = []
        self.controls = []
        self.images = []
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        entry = {"tag": tag, "attrs": attrs, "text": []}
        if tag in {"section", "header", "footer", "main", "form"}:
            entry["section_index"] = len(self.sections)
            self.sections.append(entry)
        if tag in {"a", "button", "input", "select", "textarea"}:
            self.controls.append(entry)
        if tag == "img":
            self.images.append(entry)
        if tag == "script":
            self.scripts.append(entry)
        if tag not in {"meta", "link", "img", "input", "br", "hr", "source"}:
            self.stack.append(entry)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i]["tag"] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        value = " ".join(data.split())
        if value:
            for item in self.stack:
                item["text"].append(value)


def summarize(path):
    audit = Audit()
    audit.feed(path.read_text(encoding="utf-8"))
    print(f"\n## {path.name}\n")
    for item in audit.sections:
        text = " ".join(item["text"])
        print(f"{item['tag']} #{item['attrs'].get('id', '')}: {text[:300]}")
    print("\nCONTROLS")
    for item in audit.controls:
        a = item["attrs"]
        print(item["tag"], repr(" ".join(item["text"])[:100]), "href=", a.get("href"), "path=", a.get("data-path"), "type=", a.get("type"), "onclick=", a.get("onclick"), "onsubmit=", a.get("onsubmit"))
    print("\nIMAGES", len(audit.images), "SCRIPTS", len(audit.scripts))
    for item in audit.scripts:
        print("script", item["attrs"].get("src", "inline"), " ".join(item["text"])[:350])


if __name__ == "__main__":
    for name in sys.argv[1:]:
        summarize(Path(name))
