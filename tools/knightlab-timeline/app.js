/**
 * Knight Lab Timeline Application
 * Loads event data from CSV URL and creates an interactive timeline
 */

class TimelineApp {
    constructor() {
        this.csvUrl = URLUtils.getParam('csv');
        this.events = [];
        this.timelineInstance = null;
        this.init();
    }

    init() {
        if (!this.csvUrl) {
            this.showError('No CSV URL provided. Use: ?csv=https://your-url/timeline.csv');
            return;
        }

        this.loadCSV();
    }

    /**
     * Load and parse CSV from URL
     */
    async loadCSV() {
        try {
            const csvText = await URLUtils.fetchCSV(this.csvUrl);
            this.parseCSV(csvText);
            this.createTimeline();
        } catch (error) {
            this.showError(`Failed to load CSV: ${error.message}`);
        }
    }

    /**
     * Parse CSV content into timeline events
     * Expected format:
     * year,month,day,text,headline,media_url,media_caption
     */
    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');

        if (lines.length === 0) {
            throw new Error('CSV file is empty');
        }

        // Skip header row
        const headerLine = lines[0].toLowerCase();
        let startIndex = 0;
        if (headerLine.includes('year') || headerLine.includes('date')) {
            startIndex = 1;
        }

        for (let i = startIndex; i < lines.length; i++) {
            const fields = this.parseCSVLine(lines[i]);
            if (fields.length >= 3) {
                const event = this.createEventFromFields(fields);
                if (event) {
                    this.events.push(event);
                }
            }
        }

        if (this.events.length === 0) {
            throw new Error('No valid events found in CSV');
        }
    }

    /**
     * Create an event object from CSV fields
     * Fields: year, month, day, text, headline, [media_url], [media_caption]
     */
    createEventFromFields(fields) {
        const year = this.parseNumber(fields[0]);
        const month = fields.length > 1 ? this.parseNumber(fields[1]) : 1;
        const day = fields.length > 2 ? this.parseNumber(fields[2]) : 1;
        const text = fields.length > 3 ? fields[3].trim() : '';
        const headline = fields.length > 4 ? fields[4].trim() : '';
        const mediaUrl = fields.length > 5 ? fields[5].trim() : '';
        const mediaCaption = fields.length > 6 ? fields[6].trim() : '';

        if (!year || !headline) {
            return null;
        }

        const event = {
            start_date: {
                year: year,
                month: Math.max(1, Math.min(12, month)),
                day: Math.max(1, Math.min(31, day))
            },
            text: {
                headline: this.escapeHtml(headline),
                text: this.formatContent(text)
            }
        };

        // Add media if provided
        if (mediaUrl) {
            event.media = {
                url: mediaUrl,
                caption: this.escapeHtml(mediaCaption || '')
            };
        }

        return event;
    }

    /**
     * Parse a CSV line handling quoted fields
     */
    parseCSVLine(line) {
        const result = [];
        let current = '';
        let insideQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current);

        return result;
    }

    /**
     * Parse string to number
     */
    parseNumber(str) {
        const num = parseInt(str.trim(), 10);
        return isNaN(num) ? null : num;
    }

    /**
     * Format content for display (handle line breaks)
     */
    formatContent(content) {
        if (!content) return '';
        // Handle escaped newlines
        let formatted = content.replace(/\\n/g, '<br>');
        // Escape HTML
        formatted = this.escapeHtml(formatted);
        return formatted;
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Create timeline with Knight Lab Timeline.js
     */
    createTimeline() {
        const timelineData = {
            scale: 'gregorian',
            events: this.events
        };

        // Hide loading container
        document.getElementById('loadingContainer').style.display = 'none';

        // Initialize timeline
        this.timelineInstance = new TL.Timeline(
            'timeline',
            timelineData,
            {
                scale_factor: 2,
                language: 'en',
                hash_bookmark: true,
                debug: false
            }
        );

        // Responsive resize
        window.addEventListener('resize', () => {
            if (this.timelineInstance) {
                this.timelineInstance.updateDisplay();
            }
        });
    }

    /**
     * Show error message to user
     */
    showError(message) {
        const loadingContainer = document.getElementById('loadingContainer');
        loadingContainer.innerHTML = `
            <div class="error-box">
                <h2>❌ Error</h2>
                <p>${message}</p>
                <p style="font-size: 0.9em; opacity: 0.7;">Check the URL parameter and ensure the CSV is accessible.</p>
            </div>
        `;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TimelineApp();
});
