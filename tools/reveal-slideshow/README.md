# Reveal Slideshow Tool

A web-based presentation tool that loads slide content from CSV files. Perfect for educators who want to quickly create and share presentations with personalized content.

## 🎯 Quick Start

1. Create a CSV file with your slides
2. Host it online (Google Drive, GitHub, Dropbox, etc.)
3. Open the tool with the CSV URL:
   ```
   https://your-domain.com/tools/reveal-slideshow/?csv=https://your-csv-url.com/slides.csv
   ```

## 📝 CSV Format

The CSV file should have a header row with `title` and `content` columns.

### Basic Example:
```csv
title,content
"Welcome","Let's learn together"
"Topic 1","Main content for topic 1"
"Topic 2","Main content for topic 2"
"Thank You","Questions?"
```

### With Multi-line Content:
```csv
title,content
"Introduction","This is line 1\nThis is line 2\nThis is line 3"
"List Example","Point 1\nPoint 2\nPoint 3"
"Conclusion","All done!"
```

### Advanced Example:
```csv
title,content
"Course: Data Science","2024 Edition"
"Chapter 1","Introduction to Python\nVariables and Data Types"
"Chapter 2","Lists, Tuples, and Dictionaries\nKey Concepts Explained"
"Chapter 3","Functions and Modules\nCode Organization"
"Summary","Key takeaways and next steps"
```

## 🕹️ Controls

- **Next slide**: Right arrow or spacebar
- **Previous slide**: Left arrow
- **Overview**: ESC key (get a bird's eye view of all slides)
- **Full screen**: F key
- **Speaker notes**: S key
- **Navigation menu**: Click slide number

## 🎨 Features

- ✨ Professional presentation styling
- 🔄 Smooth transitions between slides
- 📊 Automatic slide numbering
- 👁️ Overview mode for quick navigation
- 📱 Responsive on all devices
- ⌨️ Full keyboard support
- 🖥️ Presenter view support

## 🌍 Hosting CSV Files

### Google Drive (Recommended for Educators):
1. Create a Google Sheet with your slides
2. Add columns: `title` and `content`
3. Click **File → Share → Publish to web**
4. Select **Comma-separated values (.csv)** as format
5. Click **Publish** and copy the link
6. Use directly: `?csv=[PUBLISHED_LINK]`

### Regular Web Server:
Simply upload the CSV file and use the direct URL.

### GitHub:
1. Upload CSV to a GitHub repository
2. Click "Raw" button to get the raw URL
3. Use the raw URL directly

### Dropbox:
1. Share the file
2. Get the share link
3. Add `?dl=1` to the end of the URL

## 🔗 Example URLs

### Local Development:
```
http://localhost:8000/tools/reveal-slideshow/?csv=file:///path/to/slides.csv
```

### GitHub Hosted:
```
https://example.com/tools/reveal-slideshow/?csv=https://raw.githubusercontent.com/user/repo/main/slides.csv
```

### Google Drive Hosted:
```
https://example.com/tools/reveal-slideshow/?csv=https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

## ⚙️ Customization

### Changing Theme

Edit `index.html` to use different reveal.js themes:
- `black` (default)
- `white`
- `league`
- `sky`
- `beige`
- `simple`
- `serif`
- `blood`
- `night`
- `moon`

Change this line in the `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/theme/black.min.css">
```

### Custom CSS

Add custom styling in the `<style>` section to modify:
- Fonts
- Colors
- Slide layout
- Content formatting

## 📋 Tips for Educators

1. **Keep it simple**: Use clear, concise titles and content
2. **Use line breaks**: Separate bullet points with `\n` for better readability
3. **Test before sharing**: Always open the link to ensure it works correctly
4. **Version control**: Keep multiple versions of your CSV files
5. **Backup**: Store copies in multiple locations

## 🐛 Troubleshooting

### "No CSV URL provided" error
- Make sure you're using the `?csv=` parameter
- Example: `?csv=https://example.com/slides.csv`

### "Failed to load CSV" error
- Check that the CSV URL is publicly accessible
- Verify the URL is correct
- Check browser console for CORS errors
- Ensure the CSV file exists

### Slides not displaying correctly
- Verify CSV format (header row with `title` and `content`)
- Check for proper CSV quoting around fields
- Ensure line breaks use `\n` instead of actual line breaks

### Content doesn't render
- Make sure your CSV is valid CSV format
- Try opening the CSV in a text editor to verify
- Check for special characters that need escaping

## 🎓 Example Lesson Plan

Here's a template CSV for a complete lesson:

```csv
title,content
"Biology 101: Cell Structure","Learn the fundamental building blocks of life"
"What is a Cell?","The basic unit of all living organisms\nToo small to see with your eyes\nRequires a microscope"
"Cell Types","Prokaryotic: No nucleus (bacteria)\nEukaryotic: Has a nucleus (plants, animals, fungi)"
"Plant Cell Components","Nucleus\nChloroplasts\nCell Wall"
"Animal Cell Components","Nucleus\nMitochondria\nCell Membrane"
"Key Differences","Plant cells have chloroplasts and cell walls\nAnimal cells have centrioles"
"Summary","All living things are made of cells\nTwo main cell types\nEach has specific functions"
"Questions?","Discussion time!"
```

---

Made with ❤️ for educators
