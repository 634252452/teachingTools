# Knight Lab Timeline Tool

An interactive timeline visualization tool powered by Knight Lab's Timeline.js library. Load historical events from CSV files to create beautiful, interactive timelines.

## 🎯 Quick Start

1. Create a CSV file with your timeline events
2. Host it online (Google Drive, GitHub, Dropbox, etc.)
3. Open the tool with the CSV URL:
   ```
   https://your-domain.com/tools/knightlab-timeline/?csv=https://your-csv-url.com/timeline.csv
   ```

## 📝 CSV Format

The CSV file should have a header row. Required columns are: `year`, `month`, `day`, `text`, `headline`

### Basic Example:
```csv
year,month,day,text,headline
1969,7,20,"First humans on the Moon","Apollo 11 Moon Landing"
1989,11,9,"Fall of the Berlin Wall","Berlin Wall Falls"
2004,12,26,"Devastating Indian Ocean earthquake","2004 Indian Ocean Earthquake"
2016,11,8,"42nd U.S. Presidential Election","Donald Trump Elected President"
```

### Complete Example with Media:
```csv
year,month,day,text,headline,media_url,media_caption
1969,7,20,"Millions watched as humans first set foot on the Moon","Apollo 11 Moon Landing","https://example.com/apollo11.jpg","Apollo 11 crew"
1989,11,9,"The Berlin Wall fell marking the end of the Cold War","Berlin Wall Falls","https://example.com/berlin.jpg","East Germans breaking through the wall"
2001,9,11,"Terrorist attacks change the world forever","9/11 Terrorist Attacks","https://example.com/911.jpg","Twin towers burning"
```

### With Multi-line Content:
```csv
year,month,day,text,headline
1945,9,2,"Japan formally surrenders to the Allies\nEnding World War II\nSoviet Union also joins","World War II Officially Ends"
1962,10,16,"Soviet missiles discovered in Cuba\nKennedy ordered a naval blockade\nWorld held its breath for 13 days","Cuban Missile Crisis Begins"
```

## 📊 Column Reference

| Column | Required | Description | Example |
|--------|----------|-------------|---------|
| `year` | ✅ Yes | Year of the event | `1969` |
| `month` | ✅ Yes | Month (1-12) | `7` |
| `day` | ✅ Yes | Day of month (1-31) | `20` |
| `text` | ✅ Yes | Detailed description | `"First moon landing"` |
| `headline` | ✅ Yes | Event title | `"Apollo 11"` |
| `media_url` | ❌ Optional | URL to image/media | `"https://..."` |
| `media_caption` | ❌ Optional | Caption for media | `"Moon landing photo"` |

## 🕹️ Controls

- **Scroll/Pan**: Click and drag horizontally to move through time
- **Zoom**: Use mouse wheel or pinch on touch devices
- **Click Event**: Click on any event marker to see full details
- **Navigation**: Use timeline slider at bottom to jump to specific dates
- **Era View**: Click to switch between different time scales

## 🎨 Features

- ✨ Interactive timeline with smooth animations
- 📸 Support for images and media in events
- 🔄 Scroll navigation through time
- 📱 Fully responsive and touch-friendly
- 🌍 Support for any historical period
- ⌨️ Keyboard navigation support
- 🔗 Shareable URLs with hash bookmarks

## 🌍 Hosting CSV Files

### Google Sheets (Recommended for Educators):
1. Create a Google Sheet with your timeline events
2. Add columns: `year`, `month`, `day`, `text`, `headline`, and optionally `media_url`, `media_caption`
3. Click **File → Share → Publish to web**
4. Select **Comma-separated values (.csv)** as format
5. Click **Publish** and copy the link
6. Use directly: `?csv=[PUBLISHED_LINK]`

### GitHub:
1. Upload CSV to a GitHub repository
2. Click "Raw" button to get the raw URL
3. Use the raw URL directly

### Example GitHub URL:
```
https://raw.githubusercontent.com/user/repo/main/timeline.csv
```

## 🔗 Example URLs

### History of Space Exploration:
```
https://example.com/tools/knightlab-timeline/?csv=https://example.com/space-history.csv
```

### World War II Timeline:
```
https://example.com/tools/knightlab-timeline/?csv=https://raw.githubusercontent.com/user/repo/main/ww2.csv
```

### Civil Rights Timeline:
```
https://example.com/tools/knightlab-timeline/?csv=https://drive.google.com/uc?export=download&id=ABC123
```

## 📋 Tips for Educators

1. **Chronological order**: Sort events by actual date, not necessarily year
2. **Add context**: Use the `text` column for detailed explanations
3. **Include media**: Add relevant images to make timelines more engaging
4. **Dates matter**: Be accurate with months and days for proper positioning
5. **Multi-day events**: If an event spans multiple days, use the start date

## 🎓 Example: World War II Timeline

```csv
year,month,day,text,headline,media_url,media_caption
1939,9,1,"Germany invades Poland starting World War II","Germany Invades Poland","https://example.com/ww2-start.jpg","German tanks entering Poland"
1941,12,7,"Japanese forces attack U.S. naval base at Pearl Harbor","Pearl Harbor Attack","https://example.com/pearl-harbor.jpg","USS Arizona Memorial"
1944,6,6,"D-Day: Allied forces land in Normandy, France","D-Day Landings","https://example.com/dday.jpg","Soldiers wading ashore at Normandy"
1945,5,7,"Germany surrenders unconditionally to the Allies","Germany Surrenders","https://example.com/vday.jpg","V-E Day celebrations"
1945,9,2,"Japan formally surrenders ending World War II","Japan Surrenders","https://example.com/vj-day.jpg","Celebrations in Times Square"
```

## 🎨 Customization

### Date Scales

The timeline automatically adjusts its scale based on the time period:
- **Single year**: Shows months
- **Several years**: Shows years
- **Several decades**: Shows decades
- **Centuries**: Shows centuries

### Media Types

Supported media includes:
- JPEG/PNG images
- YouTube videos
- Vimeo videos
- Flickr photos
- Instagram posts
- Twitter embeds

## ⚙️ Advanced Features

### Hash Bookmarks
Share specific moments in the timeline by using bookmarks:
```
https://example.com/tools/knightlab-timeline/?csv=https://...#event-1969-7-20
```

### Multiple Timelines
Create different timelines for different topics and link between them using themed collection URLs.

## 🐛 Troubleshooting

### "No CSV URL provided" error
- Make sure you're using the `?csv=` parameter
- Example: `?csv=https://example.com/timeline.csv`

### "Failed to load CSV" error
- Check that the CSV URL is publicly accessible
- Verify the URL is correct in the browser address bar
- Check for CORS issues (try a different hosting service)

### Events not appearing in the correct order
- Verify all dates are chronologically ordered
- Check that year, month, and day values are valid numbers
- Ensure the CSV header row matches the column names

### Timeline appears blank
- Verify at least one valid event with year, month, day, text, and headline
- Check browser console for error messages
- Try simplifying the CSV to test with basic data

### Media not displaying
- Ensure media URLs are public and accessible
- Verify the file format is supported
- Check that the URL is complete and valid

## 🚀 Creating Timelines

### Template CSV File:
```csv
year,month,day,text,headline,media_url,media_caption
[YEAR],[MONTH],[DAY],"[Detailed description]","[Event Title]","[Image URL]","[Caption]"
```

### Workflow:
1. Research your events and gather facts
2. Create CSV with basic columns: year, month, day, text, headline
3. Add media URLs if desired
4. Test the timeline locally
5. Share the URL with students

---

Made with ❤️ for educators using Knight Lab's Timeline.js
