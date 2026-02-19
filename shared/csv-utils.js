/**
 * CSV Utilities
 * Provides a single entry `CSVUtils.parseCSVText(text)` that returns
 * an array of objects (header -> value).
 *
 * If PapaParse is available (window.Papa) it will be used for robust parsing.
 * Otherwise a lightweight fallback parser is used.
 */

const CSVUtils = {
    parseCSVText: function(text) {
        if (!text) return [];

        if (window.Papa && typeof window.Papa.parse === 'function') {
            const res = window.Papa.parse(text, {
                header: true,
                skipEmptyLines: true,
                transformHeader: (h) => (h || '').trim()
            });
            if (res.errors && res.errors.length) {
                console.warn('PapaParse reported errors parsing CSV:', res.errors);
            }
            return res.data;
        }

        // Fallback simple parser (does not fully support newlines inside quoted fields)
        const lines = text.split('\n').filter(l => l.trim() !== '');
        if (lines.length === 0) return [];

        const parseLine = (line) => {
            const result = [];
            let current = '';
            let insideQuotes = false;
            for (let i = 0; i < line.length; i++) {
                const ch = line[i];
                if (ch === '"') {
                    if (insideQuotes && line[i + 1] === '"') {
                        current += '"';
                        i++;
                    } else {
                        insideQuotes = !insideQuotes;
                    }
                } else if (ch === ',' && !insideQuotes) {
                    result.push(current);
                    current = '';
                } else {
                    current += ch;
                }
            }
            result.push(current);
            return result.map(f => {
                const t = f.trim();
                if (t.startsWith('"') && t.endsWith('"')) return t.slice(1, -1);
                return t;
            });
        };

        const headers = parseLine(lines[0]).map(h => h.trim());
        const rows = [];
        for (let i = 1; i < lines.length; i++) {
            const fields = parseLine(lines[i]);
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = fields[j] !== undefined ? fields[j] : '';
            }
            rows.push(obj);
        }

        return rows;
    }
};
