export function countCards() {
    const countColumns = document.querySelectorAll('.cards-wrapper');
    const countHTMLFirstColumn = countColumns[0].querySelectorAll('.card');
    const countHTMLSecondColumn = countColumns[1].querySelectorAll('.card');
    const countHTMLThirdColumn = countColumns[2].querySelectorAll('.card');
    const countFirstColumn = Array.from(countHTMLFirstColumn).length;
    const countSecondColumn = Array.from(countHTMLSecondColumn).length;
    const countThirdtColumn = Array.from(countHTMLThirdColumn).length;
    document.getElementById('todocounter').textContent = `${countFirstColumn}`;
    document.getElementById('in-progress-counter').textContent = `${countSecondColumn}`;
    document.getElementById('done-counter').textContent = `${countThirdtColumn}`;
};