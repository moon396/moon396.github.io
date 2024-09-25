// 탭을 클릭했을 때 내용 표시
function showContent(tabId) {
    var tabs = document.querySelectorAll('.tab-link');
    var contents = document.querySelectorAll('.content');

    // 모든 탭 및 내용 비활성화
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // 선택된 탭 및 내용 활성화
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="showContent('${tabId}')"]`).classList.add('active');
}

