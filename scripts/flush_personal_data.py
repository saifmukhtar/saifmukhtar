from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

FILES = [
    "index.html",
    "package.json",
    "src/components/Footer.tsx",
    "src/components/SocialStrip.tsx",
    "src/data/projects.ts",
    "src/data/links.ts",
    "src/data/skills.ts",
]

REPLACEMENTS = [
    ("Saif Mukhtar", "Template Name"),
    ("saifmukhtar", "template"),
    ("HCSN", "Template"),
    ("hcsn", "template"),
    ("Aligarh, India", "Your location"),
    ("Aligarh Muslim University", "Your institution"),
]


def main() -> None:
    for relative_path in FILES:
        path = ROOT / relative_path
        if not path.exists():
            continue

        content = path.read_text()
        for old, new in REPLACEMENTS:
            content = content.replace(old, new)
        path.write_text(content)


if __name__ == "__main__":
    main()