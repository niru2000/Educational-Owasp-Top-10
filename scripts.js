function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}