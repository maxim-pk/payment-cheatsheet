class GlobalPayoutsTester {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show corresponding content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(tab.dataset.tab).style.display = 'block';
            });
        });

        // Copy functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('copy-btn')) {
                const text = e.target.dataset.copy;
                navigator.clipboard.writeText(text).then(() => {
                    const original = e.target.textContent;
                    e.target.textContent = '✓ Copied!';
                    setTimeout(() => {
                        e.target.textContent = original;
                    }, 2000);
                });
            }
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });

            // Clear search on escape
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    searchInput.value = '';
                    this.hideSearchResults();
                }
            });
        }

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideSearchResults();
            }
        });
    }

    handleSearch(query) {
        clearTimeout(this.searchTimeout);

        if (!query || query.trim().length < 2) {
            this.hideSearchResults();
            return;
        }

        this.searchTimeout = setTimeout(() => {
            this.performSearch(query.toLowerCase().trim());
        }, 200);
    }

    hideSearchResults() {
        const container = document.getElementById('search-results');
        if (container) {
            container.style.display = 'none';
        }
    }

    performSearch(query) {
        const allItems = document.querySelectorAll('.data-item');
        const results = [];

        allItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const code = item.querySelector('code')?.textContent.toLowerCase() || '';
            const spans = Array.from(item.querySelectorAll('span'))
                .map(span => span.textContent.toLowerCase())
                .join(' ');

            // Ищем во всех частях элемента
            if (text.includes(query) || code.includes(query) || spans.includes(query)) {
                // Создаем клон для подсветки
                const clone = item.cloneNode(true);

                // Подсвечиваем совпадения во всех элементах
                const elementsToHighlight = [clone, ...clone.querySelectorAll('span, code')];

                elementsToHighlight.forEach(element => {
                    const elementText = element.textContent.toLowerCase();
                    if (elementText.includes(query)) {
                        const regex = new RegExp(`(${this.escapeRegExp(query)})`, 'gi');
                        element.innerHTML = element.textContent.replace(
                            regex,
                            '<mark class="search-highlight">$1</mark>'
                        );
                    }
                });

                results.push({
                    element: clone,
                    tab: this.findParentTab(item),
                    relevance: this.calculateRelevance(item, query)
                });
            }
        });

        // Сортируем по релевантности
        results.sort((a, b) => b.relevance - a.relevance);

        this.displaySearchResults(results);
    }

    calculateRelevance(item, query) {
        const text = item.textContent.toLowerCase();
        const code = item.querySelector('code')?.textContent.toLowerCase() || '';
        const firstSpan = item.querySelector('span')?.textContent.toLowerCase() || '';

        let score = 0;

        // Совпадение в номере карты (самое важное)
        if (code.includes(query)) score += 10;

        // Совпадение в первом span (метке)
        if (firstSpan.includes(query)) score += 5;

        // Общее совпадение
        if (text.includes(query)) score += 1;

        return score;
    }


    findParentTab(element) {
        let parent = element;
        while (parent && !parent.classList.contains('tab-content')) {
            parent = parent.parentElement;
        }
        return parent ? parent.id : 'common';
    }

    displaySearchResults(results) {
        const container = document.getElementById('search-results');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<div class="search-results-content"><p style="padding: 20px; text-align: center; color: var(--gray);">No results found</p></div>';
            container.style.display = 'block';
            return;
        }

        // Group by tab
        const grouped = {};
        results.forEach(result => {
            if (!grouped[result.tab]) grouped[result.tab] = [];
            grouped[result.tab].push(result);
        });

        // Build HTML
        let html = '<div class="search-results-content">';

        Object.entries(grouped).forEach(([tabId, tabResults]) => {
            const tabName = this.getTabName(tabId);

            console.log(tabResults);

            html += `
                <div class="search-tab-group">
                    <h4>${tabName} (${tabResults.length})</h4>
                    <div class="search-items">
                        ${tabResults.slice(0, 10).map(result => `
                            <div class="search-item">
                                ${result.element.innerHTML}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
        container.style.display = 'block';
    }

    getTabName(tabId) {
        const names = {
            'common': 'Common Cards',
            'stripe': 'Stripe',
            'paypal': 'PayPal',
            'braintree': 'Braintree',
            'authnet': 'Authorize.net',
            'epd': 'EasyPayDirect',
            'klarna': 'Klarna',
            'finix': 'Finix',
            'mollie': 'Mollie'
        };
        return names[tabId] || tabId;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.payoutsTester = new GlobalPayoutsTester();
});