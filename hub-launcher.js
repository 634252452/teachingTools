/**
 * Hub Launcher Script
 * Handles quick launch form for opening tools with parameters
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quickLaunchForm');
    const toolSelect = document.getElementById('toolSelect');
    const titleGroup = document.getElementById('titleGroup');
    const csvUrl = document.getElementById('csvUrl');
    const mapTitle = document.getElementById('mapTitle');

    // Show/hide map title field based on tool selection
    toolSelect.addEventListener('change', function() {
        if (this.value === 'markmap-visualizer') {
            titleGroup.style.display = 'flex';
            mapTitle.required = true;
        } else {
            titleGroup.style.display = 'none';
            mapTitle.required = false;
            mapTitle.value = '';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const tool = toolSelect.value;
        const csv = csvUrl.value.trim();

        // Validate inputs
        if (!tool) {
            showFormError('Please select a tool');
            return;
        }

        if (!csv) {
            showFormError('Please enter a CSV/Sheet URL');
            return;
        }

        // Validate URL format
        if (!isValidUrl(csv)) {
            showFormError('Please enter a valid URL');
            return;
        }

        // Build tool URL
        let toolUrl = `tools/${tool}/`;

        if (tool === 'markmap-visualizer') {
            const title = mapTitle.value.trim();
            if (!title) {
                showFormError('Please enter a map title for Markmap');
                return;
            }
            toolUrl += `?csv=${encodeURIComponent(csv)}&title=${encodeURIComponent(title)}`;
        } else {
            toolUrl += `?csv=${encodeURIComponent(csv)}`;
        }

        // Clear any error messages
        clearFormError();

        // Redirect to tool
        window.location.href = toolUrl;
    });

    /**
     * Validate URL format
     */
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    /**
     * Show form error message
     */
    function showFormError(message) {
        clearFormError();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.id = 'formError';
        errorDiv.textContent = '❌ ' + message;
        form.insertBefore(errorDiv, form.firstChild);
    }

    /**
     * Clear form error message
     */
    function clearFormError() {
        const existingError = document.getElementById('formError');
        if (existingError) {
            existingError.remove();
        }
    }
});
