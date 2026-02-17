/**
 * Reveal Slideshow Application
 * Loads slide content from CSV URL and displays in reveal.js
 */

class SlideShowApp {
    constructor() {
        this.csvUrl = URLUtils.getParam('csv');
        this.slides = [];
        this.init();
    }

    init() {
        if (!this.csvUrl) {
            this.showError('No CSV URL provided. Use: ?csv=https://your-url/slides.csv');
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
            this.renderSlides();
        } catch (error) {
            this.showError(`Failed to load CSV: ${error.message}`);
        }
    }

    /**
     * Parse CSV content into slides
     * Expected format:
     * title,content
     * "Slide 1 Title","Slide 1 content"
     * "Slide 2 Title","Slide 2 content line 1\nSlide 2 content line 2"
     */
    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        
        if (lines.length === 0) {
            throw new Error('CSV file is empty');
        }

        // Skip header row if present
        let startIndex = 0;
        if (lines[0].toLowerCase().includes('title') && lines[0].includes('content')) {
            startIndex = 1;
        }

        for (let i = startIndex; i < lines.length; i++) {
            const fields = this.parseCSVLine(lines[i]);
            if (fields.length >= 2) {
                this.slides.push({
                    title: fields[0].trim(),
                    content: fields[1].trim()
                });
            }
        }

        if (this.slides.length === 0) {
            throw new Error('No valid slides found in CSV');
        }
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
     * Render slides into the reveal.js container
     */
    renderSlides() {
        const container = document.getElementById('slidesContainer');
        container.innerHTML = '';

        // Create title slide
        const titleSlide = document.createElement('section');
        titleSlide.innerHTML = `
            <h1 class="slide-title">Presentation</h1>
            <p class="slide-subtitle">${this.slides.length} slides</p>
        `;
        container.appendChild(titleSlide);

        // Create content slides
        this.slides.forEach((slide, index) => {
            const section = document.createElement('section');
            section.innerHTML = `
                <h2>${this.escapeHtml(slide.title)}</h2>
                <div class="slide-content">${this.formatContent(slide.content)}</div>
            `;
            container.appendChild(section);
        });

        // Initialize reveal.js
        this.initializeReveal();
    }

    /**
     * Format content for display (handle line breaks, lists, etc)
     */
    formatContent(content) {
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
     * Initialize reveal.js with configuration
     */
    initializeReveal() {
        Reveal.initialize({
            hash: true,
            center: true,
            transition: 'slide',
            backgroundTransition: 'fade',
            slideNumber: true,
            keyboard: true,
            touch: true,
            overview: true,
            width: '100%',
            height: '100%',
            margin: 0.1,
        });
    }

    /**
     * Show error message to user
     */
    showError(message) {
        const errorDiv = document.getElementById('errorMessage');
        const container = document.getElementById('slidesContainer');
        
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
        container.innerHTML = `
            <div class="loading" style="flex-direction: column; gap: 20px;">
                <h2>❌ Error</h2>
                <p>${message}</p>
                <p style="font-size: 0.9em; opacity: 0.7;">Check the URL parameter and ensure the CSV is accessible.</p>
            </div>
        `;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SlideShowApp();
});
