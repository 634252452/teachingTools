# Markmap Visualizer Tool

Create beautiful, interactive mind maps from markdown content. Perfect for visual organization of concepts, brainstorming, and knowledge mapping.

## 🎯 Quick Start

1. Create a CSV file with your mind maps
2. Host it online (Google Drive, GitHub, Dropbox, etc.)
3. Open the tool with the CSV URL and map id:
   ```
   https://your-domain.com/tools/markmap-visualizer/?csv=https://your-csv-url.com/maps.csv&title=Study%20Plan
   ```
   The `title` parameter should match an `id` value from your CSV file

## 📝 CSV Format

The CSV file should have a header row with `id` and `markdown` columns. Each row represents one mind map.

### Basic Example:
```csv
id,markdown
"Study Plan","- Backend Development\n  - Node.js\n  - Express\n  - Databases\n- Frontend\n  - React\n  - Vue"
"Project Structure","- src\n  - components\n  - utils\n- tests\n- docs"
```

### Complete Example:
```csv
id,markdown
"Biology: Cell Structure","# Cell Structure\n## Prokaryotic\n- No nucleus\n- Bacteria\n## Eukaryotic\n- Has nucleus\n- Plants, animals, fungi"
"Math: Algebra","# Algebra Fundamentals\n## Linear Equations\n- Simple equations\n- Systems of equations\n## Quadratic Equations\n- Factoring\n- Quadratic formula"
"History: World War II","# WW2 Timeline\n## Before (1930-1939)\n- Rise of Fascism\n- Japanese Expansion\n## During (1939-1945)\n- European Theatre\n- Pacific Theatre\n## After (1945+)\n- Cold War Begins\n- Decolonization"
```

### With Multi-line Content (using \\n):
```csv
title,markdown
"Project Overview","# Project Goals\n## Phase 1\n- Planning\n- Design\n## Phase 2\n- Development\n- Testing\n## Phase 3\n- Deployment\n- Monitoring"
```

## 📊 Markdown Syntax

Markmap supports standard markdown hierarchy:

```markdown
# Main Topic (Level 1)
## Subtopic (Level 2)
### Sub-subtopic (Level 3)
- Bullet point
- Another point
  - Nested point
```

### Full Example:
```markdown
# Company Structure
## Engineering
### Frontend
- React team
- Vue team
### Backend
- Python team
- Node.js team
## Sales
### Enterprise
- B2B account managers
### SMB
- Outbound team
## Marketing
```

## 🕹️ Controls

- **Pan**: Click and drag to move around the map
- **Zoom**: Use mouse wheel or pinch on touch devices
- **Fit View**: Double-click on the background
- **Expand/Collapse**: Click on individual nodes to expand/collapse branches
- **Interact**: Click nodes to highlight related connections

## 🎨 Features

- ✨ Beautiful, interactive mind map visualization
- 📐 Automatic layout and positioning
- 🔄 Zoomable and pannable interface
- 📱 Fully responsive on all devices
- ⌨️ Keyboard and touch support
- 🎭 Visual hierarchy with colors and sizing
- 💾 Responsive to window resize

## 🌍 Hosting CSV Files

### Google Sheets (Recommended for Educators):
1. Create a Google Sheet with your mind maps
2. Add columns: `title` and `markdown`
3. Click **File → Share → Publish to web**
4. Select **Comma-separated values (.csv)** as format
5. Click **Publish** and copy the link
6. Use directly: `?csv=[PUBLISHED_LINK]&title=MapTitle`

### GitHub:
1. Upload CSV to repository
2. Click "Raw" button to get URL
3. Use the raw URL directly

### Example GitHub URL:
```
https://raw.githubusercontent.com/user/repo/main/mindmaps.csv
```

## 🔗 Example URLs

### Study Materials:
```
https://example.com/tools/markmap-visualizer/?csv=https://example.com/study.csv&title=Study%20Plan
```

### Project Planning:
```
https://example.com/tools/markmap-visualizer/?csv=https://raw.githubusercontent.com/user/repo/main/projects.csv&title=Project%20Structure
```

### Learning Path:
```
https://example.com/tools/markmap-visualizer/?csv=https://drive.google.com/uc?export=download&id=ABC123&title=Learning%20Objectives
```

## 📋 Tips for Educators

1. **Clear hierarchy**: Use proper markdown levels (# for main, ##, ###, etc.)
2. **Concise labels**: Keep node labels short and clear
3. **Logical grouping**: Organize related items together
4. **Avoid deep nesting**: Keep hierarchy to 4-5 levels maximum for clarity
5. **Use consistent structure**: Maintain consistent formatting across maps

## 🎓 Example: Biology Taxonomy

```csv
title,markdown
"Animal Taxonomy","# Animals\n## Vertebrates\n### Mammals\n- Dogs\n- Cats\n- Whales\n### Birds\n- Eagles\n- Penguins\n### Reptiles\n- Snakes\n- Lizards\n## Invertebrates\n### Insects\n- Ants\n- Bees\n### Arachnids\n- Spiders\n### Mollusks\n- Octopus\n- Snails"
```

## 🎨 Example: Computer Science

```csv
title,markdown
"Programming Languages","# Languages\n## Compiled\n### Systems\n- C\n- Rust\n### JVM\n- Java\n- Kotlin\n## Interpreted\n### Dynamic\n- Python\n- JavaScript\n- Ruby\n### Static\n- Go"
```

## 🐛 Troubleshooting

### "No CSV URL provided" error
- Ensure you're using both `?csv=` and `&title=` parameters
- Example: `?csv=https://example.com/maps.csv&title=MapTitle`

### "No map title provided" error
- Add the `&title=` parameter with the exact map title
- Title matching is case-insensitive
- Make sure the title exactly matches a title in your CSV

### "Map titled X not found" error
- Check the title spelling and capitalization in the CSV
- The tool shows available titles in the error message
- Try using the exact title from the error message

### Map not rendering
- Verify markdown syntax is correct
- Test with a simpler markdown structure first
- Check browser console for specific error messages

### Markdown not displaying with line breaks
- Use `\n` for line breaks in CSV text
- Make sure markdown uses proper hierarchy levels
- Verify CSV is properly quoted around markdown content

## 📖 Markdown Reference

```
# Main Topic          → Level 1 heading (becomes root)
## Subtopic           → Level 2 heading (becomes child)
### Detail            → Level 3 heading (becomes grandchild)
- Bullet point        → Listed under parent
  - Nested            → Indented bullets become nested
```

---

Made with ❤️ for educators using Markmap visualization
