// Reset page onload event

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// // addClass
// function addClass(elem, className) {
//     if (!hasClass(elem, className)) {
//     	elem.className += ' ' + className;
//     }
// }
// // removeClass
// function removeClass(elem, className) {
// 	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
// 	if (hasClass(elem, className)) {
//         while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
//             newClass = newClass.replace(' ' + className + ' ', ' ');
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
//     }
// }
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}


function toggleMenu(menu){
    toggleClass(menu, 'on');
    var mainPage = document.getElementById("main-page");
    toggleClass(mainPage, 'slide');
    var sidebar = document.getElementById("sidebar");
    toggleClass(sidebar, 'slide');

    return false;
}
